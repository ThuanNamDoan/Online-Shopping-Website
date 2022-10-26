
/*let SanPham = [
	{MaSP: 1, Ten: 'Kem chống nắng Vichy', SoLuong: 1, GiaBan: 400, GiaGiam: 20, MaCH: "1", TenCH: 'Happy Store', Hinh: ['product-1.1', 'product-1.2', 'product-1.3', 'product-1.4', 'product-1.5', 'product-1.6', 'product-1.7'], Mau: 'Xanh', KichThuoc: 'M', DongSP: 'tgsh1'}, 
	{MaSP: 2, Ten: 'Mặt nạ dưỡng môi Laneige', SoLuong: 3, GiaBan: 500, GiaGiam: 10, MaCH: "3", TenCH: 'YYY Store', Hinh: ['product-2.1', 'product-2.2', 'product-2.3', 'product-2.4', 'product-2.5', 'product-2.6', 'product-2.7'], Mau: 'Đỏ', KichThuoc: 'L', DongSP: 'tgsh2'},
    {MaSP: 3, Ten: 'Bình giữ nhiệt Lock&Lock', SoLuong: 2, GiaBan: 200, GiaGiam: 50, MaCH: "3", TenCH: 'YYY Store', Hinh: ['product-3.1', 'product-3.2', 'product-3.3', 'product-3.4', 'product-3.5', 'product-3.6', 'product-3.7'], Mau: 'tím', KichThuoc: 'K', DongSP: 'tgsh3'},
    {MaSP: 4, Ten: 'Phấn nước Laneige', SoLuong: 1, GiaBan: 900, GiaGiam: 80, MaCH: "2", TenCH: 'Ann Store', Hinh: ['product-4.1', 'product-3.2', 'product-3.3', 'product-3.4', 'product-3.5', 'product-3.6', 'product-3.7'], Mau: 'vàng', KichThuoc: 'N', DongSP: 'tgsh4'},
    {MaSP: 5, Ten: 'Serum Dưỡng tóc R5', SoLuong: 2, GiaBan: 100, GiaGiam: 0, MaCH: "2", TenCH: 'Ann Store', Hinh: ['product-5.1', 'product-3.2', 'product-3.3', 'product-3.4', 'product-3.5', 'product-3.6', 'product-3.7'], Mau: 'hong', KichThuoc: 'O', DongSP: 'tgsh5'}, 
    {MaSP: 6, Ten: 'Serum Dưỡng tóc R5', SoLuong: 2, GiaBan: 300, GiaGiam: 10, MaCH: "3", TenCH: 'YYY Store', Hinh: ['product-5.1', 'product-3.2', 'product-3.3', 'product-3.4', 'product-3.5', 'product-3.6', 'product-3.7'], Mau: 'lam', KichThuoc: 'A', DongSP: 'tgsh6'}, 
]
localStorage.setItem("SanPham", JSON.stringify(SanPham));


let KhuyenMai = [
    {   MaCH: 1, 
        TenCH: 'Happy Store',
         
        CTKM: [
            {MaKMCH: 1, LoaiKM: 'GTDH', GTAD: 300, GTGiam: 20, NgayKT: '31/7/2021'},
            {MaKMCH: 2, LoaiKM: 'GTPT', GTAD: 200, GTGiam: 5, NgayKT: '31/7/2021'},
            {MaKMCH: 3, LoaiKM: 'VC', GTAD: 100, GTGiam: 10, NgayKT: '31/7/2021'}
        ]
    },
    {   MaCH: 2, 
        TenCH: 'Ann Store', 
        CTKM: [
            {MaKMCH: 4, LoaiKM: 'GTDH', GTAD: 250, GTGiam: 10, NgayKT: '31/7/2021'},
            {MaKMCH: 5, LoaiKM: 'VC', GTAD: 250, GTGiam: 15, NgayKT: '31/7/2021'}
        ]
    },
    {   MaCH: 3, 
        TenCH: 'YYY Store', 
        CTKM: [
            {MaKMCH: 6, LoaiKM: 'GTPT', GTAD: 300, GTGiam: 5, NgayKT: '31/7/2021'},
            {MaKMCH: 7, LoaiKM: 'GTPT', GTAD: 200, GTGiam: 25, NgayKT: '1/8/2021'},
            {MaKMCH: 8, LoaiKM: 'VC', GTAD: 250, GTGiam: 15, NgayKT: '31/7/2021'}
        ]
    },
]

localStorage.setItem("KhuyenMai", JSON.stringify(KhuyenMai));

*/

let obj = {
    KMHT : {MaKM: "", LoaiKM: "", GiaGiam: 0},
    KMStore: [

    ]
}
localStorage.setItem("KMDaChon", JSON.stringify(obj));




// let KhachHang = {
    
//         MaKH: 1,
//         HoTen: 'Lê Thị Anh Thi',
//         SDT: 1234567890,
//         Email: "",
//         TenDangNhap: "",
//         MatKhau: "",
//         SoNhaDuong: "227, đường Nguyễn Văn Cừ",
//         PhuongXa: "Phường 4",
//         QuanHuyen: "Quận 5",
//         GioiTinh: "",
// }

//localStorage.setItem("KhachHang", JSON.stringify(KhachHang));


/*--------------------------------  Function in JSON handling -------------------------------------------------*/

// Function : get  << Store List array >>  from products json
getValueArrayByKey = (jsonObj, key) => {
    let valueArr = [];
    jsonObj.map(item => {
        if (item.hasOwnProperty(key)) {
            valueArr.push(item[key]);
        }
    })
    return valueArr;
}

// Function : get  << Store List json >>  from products json
getObjectArrayByKey = (jsonObj, key) => {
    let valueArr = getValueArrayByKey(jsonObj, key);
    let objArrRes = {};

    for (i = 0; i <  valueArr.length; i++) {
        let temp = [];
        jsonObj.map(item => {
            if (item[key] == valueArr[i]) {
                temp.push(item);
            }
        })
        objArrRes[valueArr[i]] = temp;
    }
    return objArrRes;
}

// Function : get object in json when knowing {key, value} element of that object
getObjectBySubObject = (jsonObj, key, value) => {
    let obj = null;
    jsonObj.map(item => {
        if (item[key] === value) 
            obj = item;
    });
    return obj
}

function setObject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function getObject(key) {
    return JSON.parse(localStorage.getItem(key));
}

function updateItem(key, property, value)
{
    var obj = getObject(key);
    if (obj !== null) {
    obj[property] = value;    
    setObject(key, obj);
    }
}







/*---------------------------------- Get data from localStorage ---------------------------------*/
// Get << SanPham json >> from LocalStorage
var products = localStorage.getItem('SanPham') ? JSON.parse(localStorage.getItem('SanPham')) : [];
//console.log(getObjectArrayByKey(products, "TenCH"));


var discounts = localStorage.getItem('KhuyenMai') ? JSON.parse(localStorage.getItem('KhuyenMai')) : [];
//console.log(discounts);


var user = localStorage.getItem('KhachHang') ? JSON.parse(localStorage.getItem('KhachHang')) : [];







var numStore = 0;
var storeList = null;
/* ------------------- Func1. Put SanPham + Store localStorage in Cart ------------------- */
showCart = (products) => {
    storeList = getObjectArrayByKey(products, "TenCH");         // json
    numStore = Object.keys(storeList).length;

    //console.log(storeList)
    // dom element
    let mainContentContainerEle = document.querySelector('#main-content');
    let shopContainerDiv = "";

    // giá tiền tạm tính
    let provisionalPrice = 0;
    
    for (let key in storeList) {                                    // key = shop name, get array item of shop : storeList[key]
        // get store name 
        let storeName = key;
        
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
        
    
        // put item list in item-list-container (div)
        let itemListDiv = "";

        // tổng thành tiền của mỗi store
        let provisionalPriceEachStore = 0;

        // get item in store (json)
        for (let key in itemList) {     // get item : itemList[key]  (key : number)
            let giaSP = 0;

            //<img class='img-fluid' src="${itemList[key].Hinh[0]}">
            // put element in itemListDiv
            itemListDiv = '';
            if (itemList[key].Hinh.length > 0){
                itemListDiv +=  
                `
                <div class='item-container row'>
                    <!-- name + image item -->
                    <div class='col-md-4 col-sm-5 col-5'>
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
                    <div class='col-md-3 col-sm-2 col-2 align-self-center' style='text-align: center;'>`
            }
            else{
                itemListDiv +=  
                `
                <div class='item-container row'>
                    <!-- name + image item -->
                    <div class='col-md-4 col-sm-5 col-5'>
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
                    <div class='col-md-3 col-sm-2 col-2 align-self-center' style='text-align: center;'>`
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
                <div class='col-md-2 col-sm-2 col-2 align-self-center'>
                    <form>
                        <div class="form-group">
                          <input type="number" class="form-control" style='text-align: center;' value='${itemList[key].SoLuong}' min=1 onclick="changePriceByQuantity(this, ${itemList[key].MaSP}, ${itemList[key].MaCH})">
                        </div>
                    </form>
                </div>
                <!-- price -->
                <div class='col-md-2 col-sm-2 col-2 align-self-center' style='text-align: center;'>
                    <span class='item-price' id='item-price'>${itemList[key].SoLuong*giaSP}đ</span>
                </div>
                <div class='col-md-1 col-sm-1 col-1 align-self-center' style='padding:0; margin-top: -6px; text-align: center;'>
                    <svg xmlns="http://www.w3.org/2000/svg"  id='item-remove' width="16" height="16" fill="#595959" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeItem(this, ${itemList[key].MaSP}, ${itemList[key].MaCH})">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </div>
            </div> <!-- end item container --> `;
            // end put element in itemListDiv

            provisionalPrice += giaSP*itemList[key].SoLuong;
            provisionalPriceEachStore += giaSP*itemList[key].SoLuong;
        }   


        // put itemListDiv in shopContainerDiv
        shopContainerDiv +=  itemListDiv;


        // put others in in shopContainerDiv
        shopContainerDiv += 
        `</div> <!-- end list item -->
        <hr>
        <!-- discount -->
        <div class='large-item-subtitle' data-toggle="modal" data-target="#DiscountModal1" id='btn-modal' onclick="showModalEvent(this, '${provisionalPriceEachStore}')">
            <span id='store-name' style='pointer-events: none;'>${storeName}</span>&nbsp;
            <span id='discount-store-title' style='pointer-events: none;'>khuyến mãi</span>&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" style='pointer-events: none;'>
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
        </div> <!-- end shop container --></div>
        `
    }

    mainContentContainerEle.innerHTML = shopContainerDiv;

    // put giá tiền tạm tính in UI
    let provisionalPriceEle = document.querySelector('#provisional-price');
    provisionalPriceEle.innerHTML = provisionalPrice + "đ";

    // put tổng tiền in UI
    let totalPriceEle = document.querySelector('#total-price');
    totalPriceEle.innerHTML = provisionalPrice;
}





/* -------------------  Func2. Put localStorage in KHUYENMAI modal (KM Store) -------------------  */

showDiscounts = (discount, storeName, modalEle, provisionalPriceEachStore) => {
    if (discount != null) {                      // discount == null : shop không có item khuyến mãi
        let itemListDiv = "";
        let storeID = discount.MaCH;

        if (discount.CTKM.length > 0) {          // nếu shop có item khuyến mãi
            let itemList = discount.CTKM;
            
            itemList.map(item => {
                itemListDiv +=  `
                <div class='item-discount'>
                    <div class='row no-gutters item-discount-container zigzag'>
                        <div class='col-md-3 col-sm-2 col-2' style='text-align: center;'>
                            <div class='item-discount-side-container'>
                                <!--img discount--> 
                                <img class='img-fluid discount-img' src="/images/cart/voucher.png">
                                <!--shop name -->
                                <div class='item-discount-title1'>${storeName}</div>
                            </div>
                        </div>
                        <div class='col-md-6 col-sm-7 col-7 align-self-center pl-2 item-discount-main-container'>
                            <div>
                                <span class='discount-title'>Mã Voucher: </span>
                                <span class='discount-id' id='discount-id'>${item.MaKMCH}</span>
                            </div>`

                            if (item.LoaiKM == 'GTDH')
                            itemListDiv += `
                            <div class='discount-title' id='discount-amount'>Giảm ${item.GTGiam}k</div>
                            ` 
                            else if (item.LoaiKM == 'GTPT')
                            itemListDiv += `
                            <div class='discount-title' id='discount-amount'>Giảm ${item.GTGiam}%</div>
                            ` 
                            else if (item.LoaiKM == 'VC')
                            itemListDiv += `
                            <div class='discount-title' id='discount-amount'>Giảm phí vận chuyển ${item.GTGiam}k</div>
                            ` 

                            itemListDiv +=`
                            <div class='discount-subtitle'>Cho đơn hàng từ ${item.GTAD}k</div>
                            <div class='discount-subtitle'>HSD: ${item.NgayKT}</div>
                        </div>` 
                        
                       
                        let KMDaChonObj = getObject("KMDaChon");

                        let flag = 0;
                        for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
                             // kiểm tra Khuyến mãi đã chọn (nếu đã chọn thì item = bỏ chọn)
                            if (KMDaChonObj.KMStore[i].MaKM == item.MaKMCH) {
                                itemListDiv += `
                                <div class='col-md-3 col-sm-3 col-3 align-self-end btn-select'>
                                <button type="button" style='width: 70%; color: #595959; background-color: #f2f2f2; border: 1px solid #b3b3b3' class="btn" id='btn-discount' onclick="selectDiscountStore(this, '${item.MaKMCH}', '${item.LoaiKM}', '${item.GTGiam}', '${storeID}', '${provisionalPriceEachStore}')">Bỏ chọn</button>                            </div>`
                                flag = 1; // đã chọn flag = 1
                                break;
                            } 
                        }

                        if (flag == 0) {
                            // nếu chưa chọn thì item = áp dụng (flag = 0)
                            itemListDiv += `
                            <div class='col-md-3 col-sm-3 col-3 align-self-end btn-select'>
                                <button type="button" style='width: 70%;'class="btn btn-submit" id='btn-discount' onclick="selectDiscountStore(this, '${item.MaKMCH}', '${item.LoaiKM}', '${item.GTGiam}', '${storeID}', '${provisionalPriceEachStore}')">Áp dụng</button>
                            </div>`
                        }
                        

                    itemListDiv +=
                    `
                    </div>
                </div>  <!-- end item --> `
            });
            modalEle.innerHTML += itemListDiv;
        } else {
            modalEle.innerHTML +=  `
            <div class='no-discount-container'>${storeName} không có mã Voucher nào.</span>`
        }
    } else {
        modalEle.innerHTML += `
        <div class='no-discount-container'>${storeName}không có mã Voucher nào.</span>`
    }
}






var btnShowDiscountStore = null;

/* -------------------  Func3. Event click to show KHUYENMAI modal (KM Store) -------------------  */
function showModalEvent(btn, provisionalPriceEachStore){
    let btnList = document.querySelectorAll('#btn-modal');
    let modalBodyEle = document.querySelector('#modal1-body');
    let modalStoreNameEle = document.querySelector('#modal1-storeName');

    
            modalBodyEle.innerHTML = "";
            modalStoreNameEle.innerHTML = "";
            
            let storeName = btn.querySelector('#store-name').innerHTML;
        
            let discountOfStore = getObjectBySubObject(discounts, "TenCH", storeName);

            modalStoreNameEle.innerHTML = storeName;

            showDiscounts(discountOfStore, storeName, modalBodyEle, provisionalPriceEachStore);

            btnShowDiscountStore = btn;
    
}





/* -------------------  Func4. Select discount in KHUYENMAI modal (KM Store) -------------------  */
function selectDiscountStore(ele, MaKM, LoaiKM, GTGiam, StoreID, provisionalPriceEachStore) {

    
    /*----- element trong modal ------ */
    let btnList = document.querySelectorAll('#DiscountModal1 #btn-discount');

    // lấy thẻ div chứa ele
    let divClosest = ele.closest('.item-discount-container');

    // lấy ele chứa mã KM
    let eleID = divClosest.querySelector("#discount-id");

    // lấy ele giảm bao nhiêu
    let amountEle = divClosest.querySelector("#discount-amount");


    // lấy ele hiện thông tin giảm giá
    let voucherInfoSelectedEle = document.querySelector("#voucher-amount-selected");

    // get element tổng tiền 
    let totalPriceEle = document.querySelector('#total-price');

    
    /* element hiện tên KM ở mỗi store */
    let selectIDSpan = btnShowDiscountStore.querySelector("#discount-store-title");

    // lấy modal chứa ele
    let modalID = null;
    let modal = ele.closest('.modal');
    modalID = '#' + modal.id;




    // get giá tiền tạm tính
    let  proPrice = provisionalPrice();
        

    if (ele.innerHTML == "Áp dụng") {

        if (selectIDSpan.innerHTML == "khuyến mãi") {
            // set tên KM
            selectIDSpan.style.color = '#fa5838';
            if (LoaiKM == 'GTDH')
                selectIDSpan.innerHTML = " Giảm " + GTGiam + "k";
            else if (LoaiKM == 'GTPT')
                selectIDSpan.innerHTML = " Giảm " + GTGiam + "%";
            else if (LoaiKM == 'VC')
                selectIDSpan.innerHTML = " Giảm phí vận chuyển " + GTGiam + "k";


            // change style button
            ele.innerHTML = "Bỏ chọn";
            ele.style.backgroundColor = "#f2f2f2";
            ele.style.color = '#595959';
            ele.style.border = '1px solid #b3b3b3';


            // local storage
            let local_MaKM = MaKM;
            let local_LoaiKM = LoaiKM;
            let local_GTGiam = parseInt(GTGiam);
            let local_GiaGiamTheoTyLe = 0;
            if (LoaiKM == 'GTPT') 
                local_GiaGiamTheoTyLe = provisionalPriceEachStore*(GTGiam/100);
            let local_MaCH = StoreID;


            // update in KMDaChon localStorage
            let obj = {MaKM: local_MaKM, LoaiKM: local_LoaiKM, GTGiam: local_GTGiam, GiaGiamTheoTyLe: local_GiaGiamTheoTyLe, MaCH: local_MaCH}
            let KMDaChonObj = getObject("KMDaChon")
            KMDaChonObj.KMStore.push(obj);
            localStorage.setItem("KMDaChon", JSON.stringify(KMDaChonObj));


            // get KM cửa hàng
            let giaGiamCH = 0;
            let giaGiamTyLeCH = 0;
            for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
                if (KMDaChonObj.KMStore[i].LoaiKM != "GTPT") {
                    giaGiamCH += parseInt(KMDaChonObj.KMStore[i].GTGiam);
                } else {
                    giaGiamTyLeCH += parseInt(KMDaChonObj.KMStore[i].GiaGiamTheoTyLe);
                }
            }
            let giaGiamCHTotal = giaGiamCH + giaGiamTyLeCH;

            // get KM hệ thống
            let giaGiamHT = KMDaChonObj.KMHT.GiaGiam*numStore;

            // get tổng giá giảm (HT + CH)
            let giaGiamTotal = giaGiamCHTotal +  giaGiamHT;

            // update giá giảm
            voucherInfoSelectedEle.innerHTML = giaGiamTotal + "đ";

            // update tổng tiền
            totalPrice = proPrice - giaGiamTotal;
            totalPriceEle.innerHTML = totalPrice;
        } 
        else {
            // Update content modal message
            let modalMess =  document.querySelector('#MessageModal');
            let modalContent = modalMess.querySelector('.modal-body-content');
            modalContent.innerHTML = "Bạn đã chọn Voucher. Bạn có đồng ý thay đổi Voucher mới không?";

            $('#MessageModal').modal('show');
            $(modalID).modal('hide');
            modalID = null;
            
            let btnAcceptChange = document.querySelector('#btn-accept-change');
            let btnNonAcceptChange = document.querySelector('#btn-nonaccept-change');

            // Sự kiện nút Đóng
            btnNonAcceptChange.addEventListener('click', function() {
                $('#MessageModal').modal('hide');
                $(modalID).modal('show');
                modalID = null;
            });

            // Sự kiện nút Đồng ý
            btnAcceptChange.addEventListener('click', function() {
                // set tên KM
                selectIDSpan.style.color = '#fa5838';
                if (LoaiKM == 'GTDH')
                    selectIDSpan.innerHTML = "Giảm " + GTGiam + "k";
                else if (LoaiKM == 'GTPT')
                    selectIDSpan.innerHTML = "Giảm " + GTGiam + "%";
                else if (LoaiKM == 'VC')
                    selectIDSpan.innerHTML = "Giảm phí vận chuyển " + GTGiam + "k";
            
                // local storage
                let local_MaKM = MaKM;
                let local_LoaiKM = LoaiKM;
                let local_GTGiam = parseInt(GTGiam);
                let local_GiaGiamTheoTyLe = 0;
                if (LoaiKM == 'GTPT') 
                    local_GiaGiamTheoTyLe = provisionalPriceEachStore*(GTGiam/100);
                let local_MaCH = StoreID;

                
                // update in KMDaChon localStorage
                // nếu cửa hàng đó đã chọn KM rồi thì xóa KM đó
                let KMDaChonObj = getObject("KMDaChon")
        
                for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
                    if (StoreID == KMDaChonObj.KMStore[i].MaCH) {
                        KMDaChonObj.KMStore.splice(i, 1);
                    }
                }

                // thêm KM mới vào
                let obj = {MaKM: local_MaKM, LoaiKM: local_LoaiKM, GTGiam: local_GTGiam, GiaGiamTheoTyLe: local_GiaGiamTheoTyLe, MaCH: local_MaCH}
                KMDaChonObj.KMStore.push(obj);
                localStorage.setItem("KMDaChon", JSON.stringify(KMDaChonObj));


                // get KM cửa hàng
                let giaGiamCH = 0;
                let giaGiamTyLeCH = 0;
                for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
                    if (KMDaChonObj.KMStore[i].LoaiKM != "GTPT") {
                        giaGiamCH += parseInt(KMDaChonObj.KMStore[i].GTGiam);
                    } else {
                        giaGiamTyLeCH += parseInt(KMDaChonObj.KMStore[i].GiaGiamTheoTyLe);
                    }
                }
                let giaGiamCHTotal = giaGiamCH + giaGiamTyLeCH;

                // get KM hệ thống
                let giaGiamHT = KMDaChonObj.KMHT.GiaGiam * numStore;

                // get tổng giá giảm (HT + CH)
                let giaGiamTotal = giaGiamCHTotal +  giaGiamHT;

                // update giá giảm
                voucherInfoSelectedEle.innerHTML = giaGiamTotal + "đ";

                // update tổng tiền
                totalPrice = proPrice - giaGiamTotal;
                totalPriceEle.innerHTML = totalPrice;


                // lấy button đang được chọn (đã dc chọn trc đó)
                let eleSelected = null;
                for (i = 0; i < btnList.length; i++) {
                    if (btnList[i].innerHTML == "Bỏ chọn" && btnList[i] !=  ele) {
                        eleSelected = btnList[i];
                        break;
                    }
                }

                
                // change style button đã dc chọn trc đó
                if (eleSelected) {
                    eleSelected.style.backgroundColor = "#fa5838";
                    eleSelected.style.color = 'white';
                    eleSelected.style.border = 'none';
                    eleSelected.innerHTML = "Áp dụng";
                }

                // change style button (đang chọn hiện tại)
                ele.innerHTML = "Bỏ chọn";
                ele.style.backgroundColor = "#f2f2f2";
                ele.style.color = '#595959';
                ele.style.border = '1px solid #b3b3b3';
                
                // đóng modal sau khi đồng ý chọn
                $('#MessageModal').modal('hide');
                $(modalID).modal('show');
                modalID = null;
            });
        }
    } // Nếu bấm nút bỏ chọn 
    else {

        // update local storage
        let KMDaChonObj = getObject("KMDaChon");
        
        for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
            if (MaKM == KMDaChonObj.KMStore[i].MaKM) {
                KMDaChonObj.KMStore.splice(i, 1);
            }
        }

        localStorage.setItem("KMDaChon", JSON.stringify(KMDaChonObj));


        // get KM cửa hàng
        let giaGiamCH = 0;
        let giaGiamTyLeCH = 0;
        for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
            if (KMDaChonObj.KMStore[i].LoaiKM != "GTPT") {
                giaGiamCH += parseInt(KMDaChonObj.KMStore[i].GTGiam);
            } else {
                giaGiamTyLeCH += parseInt(KMDaChonObj.KMStore[i].GiaGiamTheoTyLe);
            }
        }
        let giaGiamCHTotal = giaGiamCH + giaGiamTyLeCH;

        // get KM hệ thống
        let giaGiamHT = KMDaChonObj.KMHT.GiaGiam*numStore;

        // get tổng giá giảm (HT + CH)
        let giaGiamTotal = giaGiamCHTotal +  giaGiamHT;

        // update giá giảm
        voucherInfoSelectedEle.innerHTML = giaGiamTotal + "đ";

        // update tổng tiền
        totalPrice = proPrice - giaGiamTotal;
        totalPriceEle.innerHTML = totalPrice;


        // set tên KM
        selectIDSpan.innerHTML = "khuyến mãi";
        selectIDSpan.style.color = '#262626';

        // change style button
        ele.innerHTML = "Áp dụng";
        ele.style.backgroundColor = "#fa5838";
        ele.style.color = 'white';
        ele.style.border = 'none';


        modalID = null;
    }
}





/* -------------------  Func5. Select discount button (KM Hệ thống) -------------------  */
function selectDiscountSystem(ele, loaiKM, giaGiam) {
    //giaGiam = giaGiam*numStore;
    /*----- element trong modal ------ */
    let btnList = document.querySelectorAll('#DiscountModal2 #btn-discount');

    // lấy thẻ div chứa ele
    let divClosest = ele.closest('.item-discount-container');

    // lấy ele chứa mã KM
    let eleID = divClosest.querySelector("#discount-id");

    // lấy ele giảm bao nhiêu
    let amountEle = divClosest.querySelector("#discount-amount");



    /*----- element trong cart -----*/
    let selectTitleDiv = document.querySelector('#discount-select-title');
    let selectIDSpan = document.querySelector('#discount-select-ID');
    let selectDiscountAmountSpan = document.querySelector('#discount-select-amount');
    let  btnCancel = document.querySelector('#btn-select-cancel');

    // lấy ele hiện thông tin giảm giá
    let voucherInfoSelectedEle = document.querySelector("#voucher-amount-selected");

    // get element tổng tiền 
    let totalPriceEle = document.querySelector('#total-price');



    // lấy modal chứa ele
    let modalID = null;
    let modal = ele.closest('.modal');
    modalID = '#' + modal.id;



    /*------ get giá tiền tạm tính ------*/
    let  proPrice = provisionalPrice();

    /*------ get tổng giá giảm ----*/
    let KMDaChonObj = getObject("KMDaChon");

 
    // get KM cửa hàng
    let giaGiamCH = 0;
    let giaGiamTyLeCH = 0;
    for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
        if (KMDaChonObj.KMStore[i].LoaiKM != "GTPT") {
            giaGiamCH += parseInt(KMDaChonObj.KMStore[i].GTGiam);
        } else {
            giaGiamTyLeCH += parseInt(KMDaChonObj.KMStore[i].GiaGiamTheoTyLe);
        }
    }

    let giaGiamCHTotal = giaGiamCH + giaGiamTyLeCH;


    /* ------ tổng giá giảm (HT + CH) ------ */
    let giaGiamTotal = 0;


    if (ele.innerHTML == "Áp dụng") {

        if (selectIDSpan.innerHTML == "") {

            ele.innerHTML = "Bỏ chọn";

            // change style button
            ele.style.backgroundColor = "#f2f2f2";
            ele.style.color = '#595959';
            ele.style.border = '1px solid #b3b3b3';

            // update title item
            selectTitleDiv.innerHTML = "Voucher đã chọn";  
                        
            // update mã
            let discountID = eleID.innerHTML;
            selectIDSpan.innerHTML = "Mã: " + discountID;

            // update giảm bao nhiêu 
            let amount = amountEle.innerHTML;
            selectDiscountAmountSpan.innerHTML = " - " + amount;


            // local storage
            let local_MaKM = discountID;
            let local_GiaGiam = parseInt(giaGiam);
            let local_LoaiKM = loaiKM;


            // update giá giảm
            giaGiamTotal = parseInt(giaGiam)*numStore + giaGiamCHTotal; // CH + HT
            voucherInfoSelectedEle.innerHTML = giaGiamTotal + "đ";

            // update tổng tiền
            totalPrice = proPrice - giaGiamTotal;
            totalPriceEle.innerHTML = totalPrice;
            


            // update in KMDaChon localStorage
            let obj = {MaKM: local_MaKM, LoaiKM: local_LoaiKM, GiaGiam: local_GiaGiam}
            updateItem("KMDaChon", "KMHT", obj);


            // thêm nút button
            btnCancel.style.display = 'initial';
        } 
        else {
            // Update content modal message
            let modalMess =  document.querySelector('#MessageModal');
            let modalContent = modalMess.querySelector('.modal-body-content');
            modalContent.innerHTML = "Bạn đã chọn Voucher. Bạn có đồng ý thay đổi Voucher mới không?";

            $('#MessageModal').modal('show');
            $(modalID).modal('hide');
            modalID = null;
            
            let btnAcceptChange = document.querySelector('#btn-accept-change');
            let btnNonAcceptChange = document.querySelector('#btn-nonaccept-change');

            // Sự kiện nút Đóng
            btnNonAcceptChange.addEventListener('click', function() {
                $('#MessageModal').modal('hide');
                $(modalID).modal('show');
                modalID = null;
            });

            // Sự kiện nút Đồng ý
            btnAcceptChange.addEventListener('click', function() {
                // update title item
                selectTitleDiv.innerHTML = "Voucher đã chọn";  
                
                // thêm nút button
                btnCancel.style.display = 'initial';

                // update mã
                let discountID = eleID.innerHTML;
                selectIDSpan.innerHTML = "Voucher: " + discountID;

                // update giảm bao nhiêu 
                let amount = amountEle.innerHTML;
                selectDiscountAmountSpan.innerHTML = " - " + amount;

                // local storage
                let local_MaKM = discountID;
                let local_GiaGiam = parseInt(giaGiam);
                let local_LoaiKM = loaiKM;
             
                    
                // update giá giảm
                giaGiamTotal = parseInt(giaGiam)*numStore + giaGiamCHTotal; // CH + HT
                voucherInfoSelectedEle.innerHTML = giaGiamTotal + "đ";

                // update tổng tiền
                totalPrice = proPrice - giaGiamTotal;
                totalPriceEle.innerHTML = totalPrice;

                /*
                else if (giaGiam == "0" && tiLe != "0") {
                    // update in KMDaChon localStorage
                    local_GiaGiam = 0;
                    local_TyLe = tiLe;
    
                    // update giá giảm
                    giaGiamTotal = parseInt(proPrice)*(tiLe/100) + giaGiamCHTotal*1000;
                    voucherInfoSelectedEle.innerHTML = giaGiamTotal + "đ";

                    // update tổng tiền
                    totalPrice = proPrice - giaGiamTotal;
                    totalPriceEle.innerHTML = totalPrice;
                }*/
                
                // update in KMDaChon localStorage
                let obj = {MaKM: local_MaKM, LoaiKM: local_LoaiKM, GiaGiam: local_GiaGiam}
                updateItem("KMDaChon", "KMHT", obj);


                // lấy button đang được chọn (đã dc chọn trc đó)
                let eleSelected = null;
                for (i = 0; i < btnList.length; i++) {
                    if (btnList[i].innerHTML == "Bỏ chọn" && btnList[i] !=  ele) {
                        eleSelected = btnList[i];
                        break;
                    }
                }

                
                // change style button đã dc chọn trc đó
                if (eleSelected) {
                    eleSelected.style.backgroundColor = "#fa5838";
                    eleSelected.style.color = 'white';
                    eleSelected.style.border = 'none';
                    eleSelected.innerHTML = "Áp dụng";
                }

                // change style button
                ele.innerHTML = "Bỏ chọn";
                ele.style.backgroundColor = "#f2f2f2";
                ele.style.color = '#595959';
                ele.style.border = '1px solid #b3b3b3';

                $('#MessageModal').modal('hide');
                $(modalID).modal('show');
                modalID = null;
            });
        }
    } // Nếu bấm nút bỏ chọn 
    else {
        //update localStorage
        let obj = {MaKM: "", LoaiKM: "", GiaGiam: 0}
        updateItem("KMDaChon", "KMHT", obj);

        
        // update tổng tiền
        totalPrice = proPrice - giaGiamCHTotal;
        totalPriceEle.innerHTML = totalPrice;

        // update giá giảm
        voucherInfoSelectedEle.innerHTML = giaGiamCHTotal + "đ";

        // change container voucher đã chọn
        selectTitleDiv.innerHTML = "";
        selectIDSpan.innerHTML = "";
        selectDiscountAmountSpan.innerHTML = "";
        btnCancel.style.display = 'none';

        // change style button
        ele.innerHTML = "Áp dụng";
        ele.style.backgroundColor = "#fa5838";
        ele.style.color = 'white';
        ele.style.border = 'none';

        modalID = null;
    }      
}




/* -------------------  Func6. Cancel select discount button in Cart (Hủy KM Hệ thống) -------------------  */
function cancelSelectButton() {
    var btnCancel =  document.querySelector('#btn-select-cancel');

    btnCancel.addEventListener('click', function() {
        let obj = {MaKM: "", LoaiKM: "", GiaGiam: 0}
        updateItem("KMDaChon", "KMHT", obj);


        // get KM cửa hàng
        let KMDaChonObj = getObject("KMDaChon");
        let giaGiamCH = 0;
        let giaGiamTyLeCH = 0;
        for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
            if (KMDaChonObj.KMStore[i].LoaiKM != "GTPT") {
                giaGiamCH += parseInt(KMDaChonObj.KMStore[i].GTGiam);
            } else {
                giaGiamTyLeCH += parseInt(KMDaChonObj.KMStore[i].GiaGiamTheoTyLe);
            }
        }

        let giaGiamCHTotal = giaGiamCH + giaGiamTyLeCH;

        // update tổng tiền
        let  proPrice = provisionalPrice(); // ex: 100.000
        let totalPriceEle = document.querySelector('#total-price');
        totalPrice = proPrice - giaGiamCHTotal;
        totalPriceEle.innerHTML = totalPrice;

        // lấy ele hiện thông tin giảm giá
        let voucherInfoSelectedEle = document.querySelector("#voucher-amount-selected");
        voucherInfoSelectedEle.innerHTML = giaGiamCHTotal + "đ";

        let selectTitleDiv = document.querySelector('#discount-select-title');
        let selectIDSpan = document.querySelector('#discount-select-ID');
        let selectDiscountAmountSpan = document.querySelector('#discount-select-amount');

        selectTitleDiv.innerHTML = "";
        selectIDSpan.innerHTML = "";
        selectDiscountAmountSpan.innerHTML = "";
        btnCancel.style.display = 'none';

        // change style button đã dc chọn trc đó
        let btnList = document.querySelectorAll('#DiscountModal2 #btn-discount');
        for (i = 0; i < btnList.length; i++) {
            if (btnList[i].innerHTML == "Bỏ chọn") {
                eleSelected = btnList[i];
                break;
            }
        }

        eleSelected.style.backgroundColor = "#fa5838";
        eleSelected.style.color = 'white';
        eleSelected.style.border = 'none';
        eleSelected.innerHTML = "Áp dụng";
    });
}





/* -------------------  Func7. Event click to remove item in cart -------------------  */
removeItem = (ele, idItem, idStore) => {
    let itemContainer = ele.closest('.item-container');
    let largeItemContainer = ele.closest('.main-content-large-item');
    let itemListContainer = ele.closest('.item-list-container');

    let KMDaChonObj = getObject("KMDaChon");

    // remove in UI
    if (itemListContainer.childElementCount == 1) {   // xóa store
        largeItemContainer.remove();

        // update local storage
        for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
            if (KMDaChonObj.KMStore[i].MaCH == idStore)  {
                KMDaChonObj.KMStore.splice(i, 1);
                localStorage.setItem("KMDaChon", JSON.stringify(KMDaChonObj));
                removeDiscountWhenRemoveStore();
            }
        }
    } 
    else {                                            // xóa item
        itemContainer.remove();                      
    }

    // tính giá tiền tạm tính
    let  proPrice = provisionalPrice();


    /*
    // get KM cửa hàng
    let giaGiamCHTotal = 0;
    if (KMDaChonObj.KMStore.length > 0) {
        let giaGiamCH = 0;
        let giaGiamTyLeCH = 0;
        for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
            if (KMDaChonObj.KMStore[i].LoaiKM != "GTPT") {
                giaGiamCH += parseInt(KMDaChonObj.KMStore[i].GTGiam);
            } else {
                giaGiamTyLeCH += parseInt(KMDaChonObj.KMStore[i].GiaGiamTheoTyLe);
            }
        }
        giaGiamCHTotal = giaGiamCH + giaGiamTyLeCH;
    }*/
    // get KM cửa hàng
    
    let giaGiamCHTotal = 0;
    if (KMDaChonObj.KMStore.length > 0) {
        let giaGiamCH = 0;
        let giaGiamTyLeCH = 0;
        for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
            if (KMDaChonObj.KMStore[i].MaCH == idStore && KMDaChonObj.KMStore[i].LoaiKM.includes("GTPT")) {
                // Tính giá giảm của store
                let provisionalPriceOfStore = 0;

                for (let key in storeList) {      
                    if(storeList[key][0].MaCH == idStore) {
                        let itemList = storeList[key];
                    
                        for (let i in itemList) {
                            // xóa sản phẩm ra khỏi storeList
                            if (itemList[i].MaSP == idItem) {
                                storeList[key].splice(i, 1)
                            }

                            if (itemList[i] != undefined)
                                provisionalPriceOfStore += (itemList[i].GiaBan - itemList[i].GiaGiam) * itemList[i].SoLuong;
                        }
                    }
                }                

                // set lại giá trị giảm theo tỷ lệ
                KMDaChonObj.KMStore[i].GiaGiamTheoTyLe = provisionalPriceOfStore * (KMDaChonObj.KMStore[i].GTGiam/100);
                localStorage.setItem("KMDaChon", JSON.stringify(KMDaChonObj));
            }

            if (KMDaChonObj.KMStore[i].LoaiKM != "GTPT") {
                giaGiamCH += parseInt(KMDaChonObj.KMStore[i].GTGiam);
            } else {
                giaGiamTyLeCH += parseInt(KMDaChonObj.KMStore[i].GiaGiamTheoTyLe);
            }
        }
        giaGiamCHTotal = giaGiamCH + giaGiamTyLeCH;
    }


    // get KM hệ thống
    let giaGiamHT = KMDaChonObj.KMHT.GiaGiam * numStore;

    // get tổng giá giảm (HT + CH)
    let giaGiamTotal = giaGiamCHTotal +  giaGiamHT;

    // update giảm giá
    let voucherInfoSelectedEle = document.querySelector("#voucher-amount-selected");
    voucherInfoSelectedEle.innerHTML = giaGiamTotal + "đ";
    
    // update tổng tiền in UI
    let totalPriceEle = document.querySelector('#total-price');
    let totalPrice = proPrice - giaGiamTotal;
    totalPriceEle.innerHTML = totalPrice;


    // remove in localStorage
    products = products.filter(item => item.MaSP != idItem);
    setObject('SanPham', products);
}


removeDiscountWhenRemoveStore = () => {
    let KMDaChonObj = getObject("KMDaChon");

    // tính giá tiền tạm tính
    let proPrice = provisionalPrice();

    // get KM cửa hàng
    let giaGiamCHTotal = 0;
    if (KMDaChonObj.KMStore.length > 0) {
        let giaGiamCH = 0;
        let giaGiamTyLeCH = 0;
        for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
            if (KMDaChonObj.KMStore[i].LoaiKM != "GTPT") {
                giaGiamCH += parseInt(KMDaChonObj.KMStore[i].GTGiam);
            } else {
                giaGiamTyLeCH += parseInt(KMDaChonObj.KMStore[i].GiaGiamTheoTyLe);
            }
        }
        giaGiamCHTotal = giaGiamCH + giaGiamTyLeCH;
    }


    // get KM hệ thống
    let giaGiamHT = KMDaChonObj.KMHT.GiaGiam*numStore;

    // get tổng giá giảm (HT + CH)
    let giaGiamTotal = giaGiamCHTotal +  giaGiamHT;
    
    // update tổng tiền in UI
    let totalPriceEle = document.querySelector('#total-price');
    let totalPrice = proPrice - giaGiamTotal;
    totalPriceEle.innerHTML = totalPrice;

    // lấy ele hiện thông tin giảm giá
    let voucherInfoSelectedEle = document.querySelector("#voucher-amount-selected");
    voucherInfoSelectedEle.innerHTML = giaGiamTotal + "đ";
}






/* -------------------  Func8. Event click to change quantity of item in cart -------------------  */
changePriceByQuantity = (ele, idItem, idStore) => {
    // update thành tiền
    let itemContainer = ele.closest('.item-container');
    let itemPriceEle = itemContainer.querySelector('.item-price');
    let unitPriceEle = itemContainer.querySelector('.item-unit-price');

    itemPriceEle.innerHTML = parseInt(unitPriceEle.innerHTML) * ele.value + "đ";

    // update localStorage
    for (let i = 0; i < products.length; i++) {
        if (products[i].MaSP == idItem) {
            products[i].SoLuong = parseInt(ele.value);
          break;
        }
    }
    setObject('SanPham', products);

    // tính giá tiền tạm tính (tổng tạm tính)
    let proPrice = provisionalPrice();


    let KMDaChonObj = getObject("KMDaChon");
    
    // get KM cửa hàng
    let giaGiamCHTotal = 0;
    if (KMDaChonObj.KMStore.length > 0) {
        let giaGiamCH = 0;
        let giaGiamTyLeCH = 0;
        for (let i = 0; i < KMDaChonObj.KMStore.length; i++) {
            if (KMDaChonObj.KMStore[i].MaCH == idStore && KMDaChonObj.KMStore[i].LoaiKM.includes("GTPT")) {
                // Tính giá giảm của store
                let provisionalPriceOfStore = 0;
                for (let key in storeList) {      
                    //console.log(storeList[key])
                    if(storeList[key][0].MaCH == idStore) {
                        let itemList = storeList[key];
                    
                        for (let i in itemList) {
                            provisionalPriceOfStore += (itemList[i].GiaBan - itemList[i].GiaGiam) * itemList[i].SoLuong;
                        }
                    }
                }

                // set lại giá trị giảm theo tỷ lệ
                KMDaChonObj.KMStore[i].GiaGiamTheoTyLe = provisionalPriceOfStore * (KMDaChonObj.KMStore[i].GTGiam/100);
                localStorage.setItem("KMDaChon", JSON.stringify(KMDaChonObj));
            }

            if (KMDaChonObj.KMStore[i].LoaiKM != "GTPT") {
                giaGiamCH += parseInt(KMDaChonObj.KMStore[i].GTGiam);
            } else {
                giaGiamTyLeCH += parseInt(KMDaChonObj.KMStore[i].GiaGiamTheoTyLe);
            }
        }
        giaGiamCHTotal = giaGiamCH + giaGiamTyLeCH;
    }


    // get KM hệ thống
    let giaGiamHT = KMDaChonObj.KMHT.GiaGiam*numStore;

    // get tổng giá giảm (HT + CH)
    let giaGiamTotal = giaGiamCHTotal +  giaGiamHT;

    // update gia giam
    let voucherInfoSelectedEle = document.querySelector("#voucher-amount-selected");
    voucherInfoSelectedEle.innerHTML = giaGiamTotal;
    
    // update tổng tiền in UI
    let totalPriceEle = document.querySelector('#total-price');
    let totalPrice = proPrice - giaGiamTotal;
    totalPriceEle.innerHTML = totalPrice;
}




/* -------------------  Func9. Put data in giá tạm tính -------------------  */
function provisionalPrice() {
    let itemPriceList = document.querySelectorAll('#item-price');

    let provisionalPrice = 0;
    for (i = 0; i < itemPriceList.length; i++) {
        provisionalPrice += parseInt(itemPriceList[i].innerHTML);
    }

    let provisionalPriceEle = document.querySelector('#provisional-price');
    provisionalPriceEle.innerHTML = provisionalPrice + "đ";

    return provisionalPrice;
}




/* ------------------- Func10. Put data information of user in UI ------------------*/
var checkChangeAdress = false;
function buttonChange() {
    var btnChange = document.querySelector('#btn-change');
    var text = document.querySelector('#text-adress');

    var textContent = null;

    btnChange.addEventListener('click', function() {
        $('#ChangeAdressModal').modal('show');

        // Sự kiện nút Đồng ý
        let btnAcceptChange = document.querySelector('#btn-accept-change');
        btnAcceptChange.addEventListener('click', function() {
            text.value = textContent;
            text.style.border = 'none';
            text.setAttribute("readonly", "");
            text.style.color = '#808080';
            btnChange.innerHTML = "Thay đổi";
            autoHeightTextArea();
            $('#MessageModal').modal('hide');
        });

        checkChangeAdress = true;          
    });  
}

buttonChange();

infoUser = () => {
    let userNameEle = document.querySelector('#user-name');
    let userPhoneEle = document.querySelector('#user-phone');
    let userAdressEle = document.querySelector('#text-adress');

    userNameEle.innerHTML = user.HoTen;
    userPhoneEle.innerHTML = user.SDT;
    userAdressEle.innerHTML = user.SoNhaDuong + ", " + user.PhuongXa + ", " + user.QuanHuyen;
}




/*  ------------------- Func11. Event Mua Hang Button ------------------ */
buyButton = () => {
    let userNameEle = document.querySelector('#btn-buy');

    userNameEle.addEventListener('click', function() {
        // get element DOM
        let userNameEle = document.querySelector('#user-name');
        let userPhoneEle = document.querySelector('#user-phone');
        let userAdressEle = document.querySelector('#text-adress');
        let totalPriceEle = document.querySelector('#total-price');
        
        let InputDistrict = document.getElementById("InputDistrict");
        let InputWard = document.getElementById("InputWard");
        let InputAddress = document.getElementById("InputAdress");

        let district = null;
        let ward = null;
        let numStreet = null;
        if (checkChangeAdress == true) {
            district = InputDistrict.options[InputDistrict.selectedIndex].text;
            ward = InputWard.options[InputWard.selectedIndex].text;
            numStreet = InputAddress.value;
        } else {
            district = user.QuanHuyen;
            ward = user.PhuongXa;
            numStreet = user.SoNhaDuong;
        }
        

        // set value
        let MuaHang = {
            MaKH: user.MaKH,
            PTTT: 'TM', 
            TenNguoiNhan: userNameEle.innerHTML, 
            SDT: userPhoneEle.innerHTML,
            SoNhaDuong: numStreet, 
            PhuongXa: ward,
            Quan: district,
            //TamTinh: totalPriceEle.innerHTML,
            /*DSDonHang: null[
                {// Ch1
                    MaCH: 1,
                    KMHT: 2,    // mã
                    KMCH: 1,    // mã
                    TienKM: 20, // tiền
                    PhiVC: 50,
                    ThanhTien: 300,
                    DSSanPham: [
                        {
                            MaSP: 1,
                            SoLuong: 2,
                            GiaBan: 300,
                            GiaGiam: 10,
                        },
                        {
                            MaSP: 2,
                            SoLuong: 3,
                            GiaBan: 100,
                            GiaGiam: 20,
                        }
                    ]
                }, 
                { // CH2
                    MaCH: 2,
                    KMHT: 3,
                    KMCH: 5,
                    TienKM: 50,
                    PhiVC: 100,
                    ThanhTien: 600,
                    DSSanPham: [
                        {
                            MaSP: 1,
                            SoLuong: 4,
                            GiaBan: 300,
                            GiaGiam: 10,
                        },
                        {
                            MaSP: 3,
                            SoLuong: 1,
                            GiaBan: 230,
                            GiaGiam: 20,
                        }
                    ]
                }
            ]*/
        };

        localStorage.setItem("MuaHang", JSON.stringify(MuaHang));
    });
}




showCart(products);

cancelSelectButton();
infoUser();
buyButton();


