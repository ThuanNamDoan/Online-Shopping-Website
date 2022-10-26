/*tính phí ship */
function shippingPrice() {
    var itemList = document.querySelectorAll('.dropdown-item');
    
    for (i = 0; i < itemList.length; i++) {
        itemList[i].addEventListener('click', function(e) {
            let ele = e.target;
            let priceEle = document.querySelector('#shipping-price');
            let btn = document.querySelector('#dropdown-shipping');

            if (ele.innerHTML == "Cùng quận") {
                priceEle.innerHTML = "25.000đ";
                btn.innerHTML = "Cùng quận";
            } else {
                priceEle.innerHTML = "50.000đ";
                btn.innerHTML = "Khác quận";
            }
        });
    }
}

/*chọn màu */
function selectColor() {
    let container = document.querySelector('#color-container');

    let itemList = container.querySelectorAll('.field-btn-container');

    for (i = 0; i < itemList.length; i++) {
        itemList[i].addEventListener('click', function(e) {
            let ele = e.target;
            if (ele.style.color != "white") {
                ele.style.backgroundColor = "#fa5838";
                ele.style.border = '1px solid #fa5838';
                ele.style.color = 'white';

                for (i = 0; i < itemList.length; i++) {
                    if (ele.isEqualNode(itemList[i]) == false) {
                        itemList[i].style.backgroundColor = "white";
                        itemList[i].style.border = '1px solid rgb(185, 185, 185)';
                        itemList[i].style.color = 'black';
                    }
                }
            } else {
                ele.style.backgroundColor = "white";
                ele.style.border = '1px solid rgb(185, 185, 185)';
                ele.style.color = 'black';
            }
        });
    }
}

/*chọn size */
function selectSize() {
    let container = document.querySelector('#size-container');

    let itemList = container.querySelectorAll('.field-btn-container');

    for (i = 0; i < itemList.length; i++) {
        itemList[i].addEventListener('click', function(e) {
            let ele = e.target;
            if (ele.style.color != "white") {
                ele.style.backgroundColor = "#fa5838";
                ele.style.border = '1px solid #fa5838';
                ele.style.color = 'white';

                for (i = 0; i < itemList.length; i++) {
                    if (ele.isEqualNode(itemList[i]) == false) {
                        itemList[i].style.backgroundColor = "white";
                        itemList[i].style.border = '1px solid rgb(185, 185, 185)';
                        itemList[i].style.color = 'black';
                    }
                }
            } else {
                ele.style.backgroundColor = "white";
                ele.style.border = '1px solid rgb(185, 185, 185)';
                ele.style.color = 'black';
            }
        });
    }
}



var checkFieldArray = {};
var valueSelectedField = {};
/*chọn các loại ở các field */
function selectContainer(checkFieldArray) {
    let container = document.querySelectorAll('#select-container');

    for (k = 0; k < container.length; k++) {
        let itemList = container[k].querySelectorAll('.field-btn-container');

        let checkField = false;
        for (i = 0; i < itemList.length; i++) {
            itemList[i].addEventListener('click', function(e) {
                let ele = e.target;
                let temp = ele.closest(".field-container");
                let  titleField = temp.querySelector(".field-title").innerHTML;
                
                if (ele.style.color != "white") {   // Nếu select
                    ele.style.backgroundColor = "#fa5838";
                    ele.style.border = '1px solid #fa5838';
                    ele.style.color = 'white';

                    checkField = true;
                    checkFieldArray[titleField] = checkField;

                    // gan gia tri da chon
                    valueSelectedField[titleField] = ele.innerHTML;
                    
                    for (i = 0; i < itemList.length; i++) {
                        if (ele.isEqualNode(itemList[i]) == false) {
                            itemList[i].style.backgroundColor = "white";
                            itemList[i].style.border = '1px solid rgb(185, 185, 185)';
                            itemList[i].style.color = 'black';
                        }
                    }

                } else {
                    ele.style.backgroundColor = "white";
                    ele.style.border = '1px solid rgb(185, 185, 185)';
                    ele.style.color = 'black';

                    checkField = false;
                    checkFieldArray[titleField] = checkField;
                }
            });
        }
    }
}

selectContainer(checkFieldArray);


/* Sự kiện nút Mua Ngay*/
function checkSelectTypeBtn2() {
    let btn2 = document.querySelector("#btn-2");

    btn2.addEventListener('click', function() {
        let selectFieldContainer = document.querySelectorAll("#select-field-container");
        let noSelect = [];

        for (i = 0; i < selectFieldContainer.length; i++) {
            let titleField = selectFieldContainer[i].querySelector(".field-title").innerHTML;
            
            if (checkFieldArray[titleField] == false || checkFieldArray[titleField] == undefined) {
                noSelect.push(titleField);
            }
        } 
        
        let modal =  document.querySelector('#MessageModal');
        let modalContent = modal.querySelector('.modal-body-content');
        if (noSelect.length > 0) { // kiểm tra có field nào chọn rồi bỏ chọn không
            let noSelectStr = "";
            for (i = 0; i < noSelect.length; i++)
                if (i != noSelect.length - 1) 
                    noSelectStr += noSelect[i] + ", ";
                else
                    noSelectStr += noSelect[i];
        
            modalContent.innerHTML = "Bạn chưa chọn " +  noSelectStr + ". Vui lòng chọn " + noSelectStr + ".";
        
            $('#MessageModal').modal('show');
        }
        else{
            let btnQuantity = document.querySelector("#input-quantity");
            let spanQuantity = document.querySelector("#product-quantity");
            
            if (btnQuantity.value > parseInt(spanQuantity.innerHTML)) {
                modalContent.innerHTML = "Bạn chọn số lượng lớn hơn số lượng có sẵn của sản phẩm. Vui lòng chọn lại số lượng.";
                $('#MessageModal').modal('show');

            } else {
                setDataLocal();
                valueSelectedField['Số lượng'] = btnQuantity.value;
                modalContent.innerHTML = "Thêm vào giỏ hàng thành công.";
                $('#MessageModal').modal('show');
                window.location = 'http://localhost:3001/cart';
            }
        } 
    });
}

/* Sự kiện nút Thêm Giỏ hàng*/
function checkSelectTypeBtn1() {
    
    let btn1 = document.querySelector("#btn-1");

    btn1.addEventListener('click', function() {
        let selectFieldContainer = document.querySelectorAll("#select-field-container");
        let noSelect = [];

        for (i = 0; i < selectFieldContainer.length; i++) {
            let titleField = selectFieldContainer[i].querySelector(".field-title").innerHTML;
            
            if (checkFieldArray[titleField] == false || checkFieldArray[titleField] == undefined) {
                noSelect.push(titleField);
            }
        } 
        
        let modal =  document.querySelector('#MessageModal');
        let modalContent = modal.querySelector('.modal-body-content');
        if (noSelect.length > 0) { // kiểm tra có field nào chọn rồi bỏ chọn không
            let noSelectStr = "";
            for (i = 0; i < noSelect.length; i++)
                if (i != noSelect.length - 1) 
                    noSelectStr += noSelect[i] + ", ";
                else
                    noSelectStr += noSelect[i];
        
            modalContent.innerHTML = "Bạn chưa chọn " +  noSelectStr + ". Vui lòng chọn " + noSelectStr + ".";
            $('#MessageModal').modal('show');
        } else {    // kiểm tra số lượng > có sẵn
            let btnQuantity = document.querySelector("#input-quantity");
            let spanQuantity = document.querySelector("#product-quantity");

            if (btnQuantity.value > parseInt(spanQuantity.innerHTML)) {
                modalContent.innerHTML = "Bạn chọn số lượng lớn hơn số lượng có sẵn của sản phẩm. Vui lòng chọn lại số lượng.";
                $('#MessageModal').modal('show');

            } else {
                setDataLocal();
                valueSelectedField['Số lượng'] = btnQuantity.value;
                modalContent.innerHTML = "Thêm vào giỏ hàng thành công.";
                $('#MessageModal').modal('show');
                
                updateCartLogoContent1();
            }
        }
    });
}

//save data in local
async function setDataLocal(){
    
    let id_product = document.getElementById('id-product').innerHTML;

    let url = `http://localhost:3001/api/detail?id=${id_product}`;

    await fetch(url, {method: 'GET'})
    .then((res)=>{
        return res.json();
    })
    .then(data => {
        let results = JSON.parse(data);
        
        let itemProductSelected = {
            MaSP: id_product,
            Ten: results.TenSP,
            SoLuong: valueSelectedField['Số lượng'],
            GiaBan: results.GiaBan,
            GiaGiam: results.GiaGiam,
            MaCH: results.MaCH,
            TenCH: results.TenCH,
            Hinh: results.Anh,
            Mau: valueSelectedField['Màu sắc'],
            KichThuoc: valueSelectedField['Kích thước'],
            DongSP: valueSelectedField['Dòng sản phẩm'],
        }
        
        let itemShopSelected = {
            MaCH: results.MaCH,
            TenCH: results.TenCH,
            CTKM: results.KMCH,
        }

        let products = JSON.parse(localStorage.getItem('SanPham'));
        let new_cart = []
        new_cart.push(itemProductSelected);

        if(products != null && products.length != 0) {
            products.forEach(item => {
                if(item.MaSP != id_product)
                    new_cart.push(item)
            })
        }

        let vouchers = JSON.parse(localStorage.getItem('KhuyenMai'));
        let check = true;

        if (vouchers != null && vouchers.length != 0){
            if (vouchers != null){
                vouchers.forEach(item => {
                    if(item.MaCH == results.MaCH)
                        check = false
                })
            }
        }
        else{
            vouchers = []
        }
        
        
        if(check)
            vouchers.push(itemShopSelected);
        
        
        localStorage.setItem("SanPham", JSON.stringify(new_cart));
        localStorage.setItem("KhuyenMai", JSON.stringify(vouchers));
    });
}

function updateCartLogoContent1(){
    let products = JSON.parse(localStorage.getItem('SanPham'));
    let element = document.getElementById('cart-dropdown');

    if(products != null && products.length != 0)
    {
        element.innerHTML = '';
        products.forEach(item => {
            element.innerHTML += 
            `<a href="/detail?id=${item.MaSP}">
                <div class="item-cart">
                    <div class='row no-gutters'>
                        <div class='col-md-2 col-sm-2 col-2'>
                            <img class='img-fluid' src=${item.Hinh[0]}>
                        </div>
                        <div class='col-md-7 col-sm-7 col-7 align-self-center'>
                            <span class='name-item-cart'>${item.Ten}</span>
                        </div>
                        <div class='col-md-3 col-sm-3 col-3 align-self-center price-item-cart'>
                            <span >${item.GiaBan - item.GiaGiam} đ</span>
                        </div>
                    </div>
                </div>
            </a>`
        });

        document.getElementById('number-cart-products').innerHTML = products.length;
    }
    
}

shippingPrice();
checkSelectTypeBtn1();
checkSelectTypeBtn2();