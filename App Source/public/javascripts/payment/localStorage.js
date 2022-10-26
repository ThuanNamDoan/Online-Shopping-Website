
var products = localStorage.getItem('SanPham') ? JSON.parse(localStorage.getItem('SanPham')) : [];

var orderInfo = localStorage.getItem('MuaHang') ? JSON.parse(localStorage.getItem('MuaHang')) : [];

var discountSelected = localStorage.getItem('KMDaChon') ? JSON.parse(localStorage.getItem('KMDaChon')) : [];

var districtUser = "";



/*--------------------------------  Function in JSON handling -------------------------------------------------*/

// Function : get  << Store List array >>  from products json
getValueArrayByKey = (jsonObj, key) => {
    let valueArr = [];
    if (jsonObj != null) {
        jsonObj.map(item => {
            if (item.hasOwnProperty(key)) {
                valueArr.push(item[key]);
            }
        })
    }
    return valueArr;
}


// Function : get  << Store List json >>  from products json
getObjectArrayByKey = (jsonObj, key) => {
    let valueArr = getValueArrayByKey(jsonObj, key);
    let objArrRes = {};

    if (jsonObj != null) {
    for (i = 0; i <  valueArr.length; i++) {
        let temp = [];
        jsonObj.map(item => {
            if (item[key] == valueArr[i]) {
                temp.push(item);
            }
        })
        objArrRes[valueArr[i]] = temp;
    }
    }
    return objArrRes;
}



function getObject(key) {
    return JSON.parse(localStorage.getItem(key));
}


// get data of stores in database
let url = `http://localhost:3001/api/store`;


var DSDonHang = [];

async function getDataStore(){
    let data = await fetch(url)
        .then((response) => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });
        //showCart(products, data);
        //console.log(data);
        let list = JSON.parse(data);
    
        showCart(products, list); 

        // Xử lý obj DonHang add to MuaHang
        let MuaHang = getObject("MuaHang");
        MuaHang.DSDonHang = DSDonHang;   
        localStorage.setItem("MuaHang", JSON.stringify(MuaHang));

        orderSubmit();
        //console.log(MuaHang)
};
getDataStore();



// ds DonHang (của tất cả shop)

/* ------------------- 1. Put localStorage in Cart ------------------- */
async function showCart (products, storeInfoList) {           // storeInfoList : get api
    let storeList = getObjectArrayByKey(products, "TenCH");         // json

    // dom element
    let mainContentContainerEle = document.querySelector('#main-content');
    let shopContainerDiv = "";

    // giá tiền tạm tính
    let provisionalPrice = 0;

    let KMDaChonObj = getObject("KMDaChon");
    
    // tổng KM phí vận chuyển (tất cả cửa hàng)
    let KMVCCHTotal = 0;

    // tổng KM giảm giá (tất cả cửa hàng)
    let KMGGCHTotal = 0;

    // KM hệ thống
    let KMVCHT = 0;
    let KMGGHT = 0;
    if (KMDaChonObj.KMHT.LoaiKM.includes("VC")) {
        KMVCHT = KMDaChonObj.KMHT.GiaGiam;
    } else {
        KMGGHT = KMDaChonObj.KMHT.GiaGiam;
    }
    let numStore = 0
    if (Object.keys(storeList).length !== 0) {
        numStore = Object.keys(storeList).length;
    for (let key in storeList) {                       // key = shop name, get array item of shop : storeList[key]
        // DonHang obj
        let DonHang = {};

        // get store name 
        let storeName = key;

        // get store id
        let storeID = storeList[key][0].MaCH;

        DonHang.MaCH = storeID;
        DonHang.KMHT = KMDaChonObj.KMHT.MaKM;

        // get item list of store
        let itemList = storeList[storeName];


        // put element in shopContainerDiv
        shopContainerDiv += `
        <div class='main-content-large-item'>
        <!-- shop name -->
        <div class='large-item-title'>
            <a href="#">
            <span id='store-name'> ` + storeName + `</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" style='margin-top: -3px;'>
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </a>
        </div>
        <!-- list item -->
        <div class='item-list-container' id='item-list-container'>`
    
        // tổng tiền của shop
        let totalPriceShop = 0;
    
        // put item list in item-list-container (div)
        let itemListDiv = "";

        // DSSanPham obj (của mỗi store)
        let DSSanPham = [];

        // get item in store (json)
        for (let key in itemList) {     // get item : itemList[key]  (key : number)
            //console.log(itemList[key]);

            // SanPham obj
            let SanPham = {};
            SanPham.MaSP = itemList[key].MaSP;
            SanPham.SoLuong = itemList[key].SoLuong;
            SanPham.GiaBan = itemList[key].GiaBan;
            SanPham.GiaGiam = itemList[key].GiaGiam;
            SanPham.Mau = itemList[key].Mau;
            SanPham.KichThuoc = itemList[key].KichThuoc;
            SanPham.DongSP = itemList[key].DongSP;

            // add to DSSanPham + DonHang
            DSSanPham.push(SanPham);
            DonHang.DSSanPham = DSSanPham;

            let giaSP = 0;

            // put element in itemListDiv
            itemListDiv = '';
            if (itemList[key].Hinh.length > 0){
                itemListDiv +=  
                `
                <div class='item-container row'>
                    <!-- name + image item -->
                    <div class='col-md-5 col-sm-6 col-6'>
                        <div class='row no-gutters'>
                            <div class='col-md-3 col-sm-2 col-2'>
                                <img class='img-fluid' src=${itemList[key].Hinh[0]}>
                            </div>
                            <div class='col-md-9 col-sm-7 col-7 align-self-center pl-2'>
                                <span class='item-name'>${itemList[key].Ten}</span>
                            </div>
                        </div>
                    </div>
                    <!-- unit price -->
                    <div class='col-md-3 col-sm-3 col-3 align-self-center' style='text-align: center;'>`
            }
            else {
                itemListDiv +=  
                `
                <div class='item-container row'>
                    <!-- name + image item -->
                    <div class='col-md-5 col-sm-6 col-6'>
                        <div class='row no-gutters'>
                            <div class='col-md-3 col-sm-2 col-2'>
                                <img class='img-fluid' src='/images/products/empty.png'>
                            </div>
                            <div class='col-md-9 col-sm-7 col-7 align-self-center pl-2'>
                                <span class='item-name'>${itemList[key].Ten}</span>
                            </div>
                        </div>
                    </div>
                    <!-- unit price -->
                    <div class='col-md-3 col-sm-3 col-3 align-self-center' style='text-align: center;'>`
            }
            
                // check if the product has a discount
                if (itemList[key].GiaGiam == 0) {
                    itemListDiv += `<span class='item-unit-price item-unit-price-input'>${itemList[key].GiaBan}đ</span>`;
                    giaSP = itemList[key].GiaBan;
                } else {
                    itemListDiv += 
                    `<span class='item-unit-price'>${itemList[key].GiaBan - itemList[key].GiaGiam}đ</span> 
                     <span class='item-old-price'>${itemList[key].GiaBan}đ</span>`;
                    giaSP = itemList[key].GiaBan - itemList[key].GiaGiam;
                }

            itemListDiv += 
            `
                </div>
                <!-- amount -->
                <div class='col-md-2 col-sm-1 col-1 align-self-center' style='text-align: center;'>
                    <span class='item-amount'>${itemList[key].SoLuong}</span>
                </div>
                <!-- price -->
                <div class='col-md-2 col-sm-2 col-2 align-self-center' style='text-align: center;'>
                    <span class='item-price' id='item-price'>${itemList[key].SoLuong*giaSP}đ</span>
                </div>
            </div> <!-- end item container --> `;
            // end put element in itemListDiv

            
            totalPriceShop += itemList[key].SoLuong*giaSP;
        }   // kết thúc ds sản phẩm của mỗi store

        // tính giá tiền tạm tính
        provisionalPrice += totalPriceShop;

        // put itemListDiv in shopContainerDiv
        shopContainerDiv +=  itemListDiv;


        // lấy địa chỉ của store
        let storeAdress = "";
        storeInfoList.forEach((item) => {
            if (item.MaCH == storeID) {
                storeAdress = item.Quan;
            }
        });

        let priceShip = 0;
        if (districtUser.includes(storeAdress)) {
            priceShip = 25000;
        } else {
            priceShip = 50000;
        }
        DonHang.PhiVC = priceShip;

        // Tiền KM của mỗi shop
        let giaGiamCH = 0;
        let giaGiamVC = 0;

        let KMVCTitleDiv = ``;
        let KMVCContentDiv = ``;

        let KMTitleDiv = ``;
        let KMGGContentDiv = ``;

        DonHang.KMCH = "";
        for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
            if (KMDaChonObj.KMStore[i].MaCH == storeID) {
                if (KMDaChonObj.KMStore[i].LoaiKM == "GTDH") {
                    giaGiamCH = parseInt(KMDaChonObj.KMStore[i].GTGiam);

                    KMGGTitleDiv = `<div>Khuyến mãi giảm giá: </div>`
                    KMGGContentDiv = giaGiamCH + "đ"; 

                    KMGGCHTotal += giaGiamCH;

                    // add to DonHang obj
                    DonHang.KMCH = KMDaChonObj.KMStore[i].MaKM; 
                } else if (KMDaChonObj.KMStore[i].LoaiKM == "GTPT") {
                    giaGiamCH = parseInt(KMDaChonObj.KMStore[i].GiaGiamTheoTyLe);

                    KMGGTitleDiv = `<div>Khuyến mãi giảm giá: </div>`
                    KMGGContentDiv = giaGiamCH + "đ";
                    
                    KMGGCHTotal += giaGiamCH; 

                    // add to DonHang obj
                    DonHang.KMCH = KMDaChonObj.KMStore[i].MaKM;
                } else if (KMDaChonObj.KMStore[i].LoaiKM == "VC") {
                    giaGiamVC += parseInt(KMDaChonObj.KMStore[i].GTGiam);

                    KMVCTitleDiv = `<div>Khuyến mãi vận chuyển:</div>`
                    KMVCContentDiv = giaGiamVC + "đ"; 

                    KMVCCHTotal += giaGiamVC;

                    // add to DonHang obj
                    DonHang.KMCH = KMDaChonObj.KMStore[i].MaKM;
                } 
                break;
            }
        }

        // tổng tiền KM của store
        let KMCHTotal = giaGiamCH + giaGiamVC + KMVCHT + KMGGHT;
        let KMCHTotalContentDiv = KMCHTotal + "đ"; 

        DonHang.TienKM = KMCHTotal;

        // thành tiền của store (Tổng tiền + PVC - KM)
        let thanhTienStore = totalPriceShop - KMCHTotal + priceShip;

        // add to DonHang
        DonHang.TienTT = thanhTienStore;
        DonHang.ThanhTien = totalPriceShop;
        DonHang.TongTien = totalPriceShop + priceShip;

        // put others in in shopContainerDiv
        shopContainerDiv += 
        `</div> <!-- end list item -->
        <!-- large item footer (tổng tiền) -->
        <div class='large-item-footer-container row'>
            <div class='col-md-4'></div>
            <div class='col-md-4 large-item-footer-side1' style='padding-right: 5%'>
                <div>Tổng tiền:</div>
                <div>Phí vận chuyển:</div> 
                <div>Tiền khuyến mãi:</div>
                <div>Thành tiền:</div>
            </div>
            <div class='col-md-2'></div>
            <div class='col-md-2 large-item-footer-side2'>
                <div>${totalPriceShop + "đ"}</div>
                <div><span id ='ship-price'>${priceShip}</span>đ</div>` +
                KMCHTotalContentDiv +
                `<div>${thanhTienStore + "đ"}</div> 
            </div>
        </div>                 
        </div> <!-- end shop container -->
        `

        // add to DSDonHang
        DSDonHang.push(DonHang);

    } // kết thúc mỗi store
    }
    mainContentContainerEle.innerHTML = shopContainerDiv;

    // update số lượng sản phẩm
    let amountItemEle = document.querySelector('#amount-item');
    if(products != null)
        amountItemEle.innerHTML = products.length;
    else 
        amountItemEle.innerHTML = 0
    
    // update tạm tính
    let totalPriceEle = document.querySelector('#provisional-price');
    totalPriceEle.innerHTML = provisionalPrice;

    // tính phí ship tổng
    let shipPriceEle = document.querySelectorAll('#ship-price');
    let shipPriceTotalEle = document.querySelector('#ship-price-total');
    let sumPriceShip = 0;
    for (i = 0; i < shipPriceEle.length; i++) {
        sumPriceShip += parseInt(shipPriceEle[i].innerHTML);
    }
    shipPriceTotalEle.innerHTML = sumPriceShip;


   

    // update KM vận chuyển + giảm giá (CH + HT)
    let priceDiscount = document.querySelector('#price-discount');
    priceDiscount.innerHTML = KMGGCHTotal + KMVCCHTotal + KMGGHT*numStore + KMVCHT*numStore;


    // update tổng tiền
    let orderPriceEle = document.querySelector('#order-price');
    orderPriceEle.innerHTML = provisionalPrice + sumPriceShip - priceDiscount.innerHTML;
    
}


/* ------------------- 9. Put data information of user in UI ------------------*/
infoUser = () => {
    let userNameEle = document.querySelector('#user-name');
    let userPhoneEle = document.querySelector('#user-phone');
    let userAdressEle = document.querySelector('#text-adress');

    let orderInfo = localStorage.getItem('MuaHang') ? JSON.parse(localStorage.getItem('MuaHang')) : [];


    userNameEle.innerHTML = orderInfo.TenNguoiNhan;
    userPhoneEle.innerHTML = orderInfo.SDT;
    userAdressEle.innerHTML = orderInfo.SoNhaDuong + ", " + orderInfo.PhuongXa + ", " + orderInfo.Quan;

    districtUser = orderInfo.Quan;
}







function orderSubmit() {
    let submitBtn = document.querySelector('#btn-submit');

    let orderInfo = localStorage.getItem('MuaHang') ? JSON.parse(localStorage.getItem('MuaHang')) : [];

    //console.log(orderInfo)

    submitBtn.addEventListener('click', function() {
        let info = JSON.parse(localStorage.getItem('KhachHang'));

        if (info != null){

            fetch('http://localhost:3001/payment', {
                method: 'POST', // or 'PUT'
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderInfo),
            })
            .then(response => response.json())
            .then(data => {
            })
            .catch((error) => {
            console.error('Error:', error);
            }); 
            window.location = 'http://localhost:3001/payment';
            
            localStorage.setItem("SanPham", null);
        }
        else{
            alert("Bạn cần phải đăng nhập hoặc đăng ký tài khoản để mua hàng.");
        }
        
    })
}

orderSubmit();
infoUser();



