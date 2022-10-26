/* Sự kiện auto height của textarea
function autoHeightTextArea(){
    var x = document.querySelector('.side-item-main textarea');
    x.style.height ='auto';
    x.style.height = x.scrollHeight+'px';
} */


/* Sự kiện nút Thay đổi địa chỉ */
/*
function buttonChange() {
    var btnChange = document.querySelector('#btn-change');
    var text = document.querySelector('#text-adress');

    var textContent = null;

    btnChange.addEventListener('click', function() {
        if (btnChange.innerHTML == "Thay đổi") {
            text.style.border = '0.11em solid #737373';
            text.style.color = 'black';
            text.removeAttribute("readonly");
            btnChange.innerHTML = "Lưu";
            textContent = text.value;
        } else { // khi lưu
            if (text.value != "") {
                text.style.border = 'none';
                text.setAttribute("readonly", "");
                text.style.color = '#808080';
                btnChange.innerHTML = "Thay đổi";
                autoHeightTextArea();
                textContent = text.value;
            } else {
                var modal =  document.querySelector('#MessageModal');
                var modalContent = modal.querySelector('.modal-body-content');
    
                modalContent.innerHTML = "Địa chỉ không được để trống. Bạn có muốn giữ nguyên địa chỉ cũ không?";
    
                $('#MessageModal').modal('show');

                // Sự kiện nút Đồng ý
                var btnAcceptChange = document.querySelector('#btn-accept-change');
                btnAcceptChange.addEventListener('click', function() {
                    text.value = textContent;
                    text.style.border = 'none';
                    text.setAttribute("readonly", "");
                    text.style.color = '#808080';
                    btnChange.innerHTML = "Thay đổi";
                    autoHeightTextArea();
                    $('#MessageModal').modal('hide');
                });
            }
        }
    });  
}*/


/* Sự kiện của các mã khuyến mãi
function selectDiscount() {
    var btnList = document.querySelectorAll('#btn-discount');
    
    var selectTitleDiv = document.querySelector('#discount-select-title');
    var selectIDSpan = document.querySelector('#discount-select-ID');
    var selectDiscountAmountSpan = document.querySelector('#discount-select-amount');

    var  btnCancel = document.querySelector('#btn-select-cancel');

    var modalID = null;

    for (i = 0; i < btnList.length; i++) {
        btnList[i].addEventListener('click', function(e) {
            let ele = e.target;

            // lấy modal chứa ele
            let modal = ele.closest('.modal');
            modalID = '#' + modal.id;

            // lấy thẻ div chứa ele
            let divClosest = ele.closest('.item-discount-container');

            // lấy mã 
            let eleID = divClosest.querySelector("#discount-id");

            // lấy ele giảm bao nhiêu
            //let amountEle = divClosest.querySelector("#discount-amount");

            // lấy ele hiện thông tin giảm giá

            let voucherInfoSelectedEle = document.querySelector("#voucher-amount-selected");

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
                    selectIDSpan.innerHTML = discountID;

                    // update giảm bao nhiêu 
                    let amount = amountEle.innerHTML;
                    selectDiscountAmountSpan.innerHTML = " - " + amount;

                    // thêm nút button
                    btnCancel.style.display = 'initial';

                    //voucherInfoSelectedEle.innerHTML = amount;
                } 
                else {
                    // Update content modal message
                    var modalMess =  document.querySelector('#MessageModal');
                    var modalContent = modalMess.querySelector('.modal-body-content');
                    modalContent.innerHTML = "Bạn đã chọn Voucher. Bạn có đồng ý thay đổi Voucher mới không?";

                    $('#MessageModal').modal('show');
                    $(modalID).modal('hide');
                    
                    var btnAcceptChange = document.querySelector('#btn-accept-change');
                    var btnNonAcceptChange = document.querySelector('#btn-nonaccept-change');

                    // Sự kiện nút Đóng
                    btnNonAcceptChange.addEventListener('click', function() {
                        $('#MessageModal').modal('hide');
                        $(modalID).modal('show');
                    });

                    // Sự kiện nút Đồng ý
                    btnAcceptChange.addEventListener('click', function() {
                        // update title item
                        selectTitleDiv.innerHTML = "Voucher đã chọn";  
                        
                        // thêm nút button
                        btnCancel.style.display = 'initial';

                        // update mã
                        let discountID = eleID.innerHTML;
                        selectIDSpan.innerHTML = discountID;

                        // update giảm bao nhiêu 
                        let amount = amountEle.innerHTML;
                        selectDiscountAmountSpan.innerHTML = " - " + amount;

                        // lấy button đang được chọn (đã dc chọn trc đó)
                        var eleSelected = null;
                        for (i = 0; i < btnList.length; i++) {
                            if (btnList[i].innerHTML == "Bỏ chọn") {
                                eleSelected = btnList[i];
                                break;
                            }
                        }
                    
                        // change style button đã dc chọn trc đó
                        eleSelected.style.backgroundColor = "#fa5838";
                        eleSelected.style.color = 'white';
                        eleSelected.style.border = 'none';
                        eleSelected.innerHTML = "Áp dụng";

                        // change style button
                        ele.innerHTML = "Bỏ chọn";
                        ele.style.backgroundColor = "#f2f2f2";
                        ele.style.color = '#595959';
                        ele.style.border = '1px solid #b3b3b3';

                        $('#MessageModal').modal('hide');
                        $(modalID).modal('show');
                    });
                }
            } // Nếu bấm nút bỏ chọn 
            else {
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
        });
    }
}*/


/* Sự kiện nút Mua hàng */
function buyButton() {
    var btnBuy =  document.querySelector('#btn-buy');

    btnBuy.addEventListener('click', function() {
        var itemList = document.querySelectorAll('.item-container');

        if (itemList.length < 1) {
            var modal =  document.querySelector('#MessageModal');
            var modalContent = modal.querySelector('.modal-body-content');

            modalContent.innerHTML = "Bạn chưa chọn sản phẩm nào. Vui lòng chọn sản phẩm trước khi mua hàng. Bạn muốn chọn thêm sản phẩm không?";

            $('#MessageModal').modal('show');

            var btnAcceptChange = document.querySelector('#btn-accept-change');
        
            // Sự kiện nút Đồng ý
            btnAcceptChange.addEventListener('click', function() {
                window.location = 'http://localhost:3001/';
            });
        } 
        else {
            window.location = 'http://localhost:3001/payment';
        }
    });
}





// reset form Sign Up
function resetChangeAdress() {
    // Xử lý input
    document.getElementById("InputName").value = "";
    document.getElementById("InputPhone").value = "";
    document.getElementById("InputAdress").value = "";
   

    // Xử lý valid
    let checkName = document.getElementById("checkName");
    let checkPhone = document.getElementById("checkPhone");
    let checkAdress = document.getElementById("checkAdress");

    checkName.style.color = "white";
    checkName.innerHTML = "#";

    checkPhone.style.color = "white";
    checkPhone.innerHTML = "#";

    checkAdress.style.color = "white";
    checkAdress.innerHTML = "#";
}


// Sự kiện của nút Xóa trong form Sign Up
function cancelButtonChangeAdress() {
    let btnCanel = document.querySelector('#btn-nonaccept-change-adress');

    btnCanel.addEventListener('click', function() {
       resetChangeAdress();
    });
}

var changeSucess = false;
// Xử lý sự kiện của form Sign Up
function changeAdress() {
    let btn = document.querySelector('#btn-accept-change-adress');
    
    let nameSuccess = false;
    let phoneSuccess = false;
    let adressSuccess = false;
    let districtSuccess = false;
    let wardSuccess = false;

    btn.addEventListener('click', function() {
        // get input
        let inputName = document.getElementById("InputName").value;
        let inputPhone = document.getElementById("InputPhone").value;
        let inputAdress = document.getElementById("InputAdress").value;
        let inputDistrict = document.getElementById("InputDistrict").value;
        let inputWard = document.getElementById("InputWard").value;
        

        // check valid input
        let validInputName = /^[0-9]+$/.test(inputName);
        
       
        let validInputPhone = true;
        if (/^[0-9]{1,10}$/.test(inputPhone) && inputPhone.match(/\d/g).length === 10)
            validInputPhone = true;
        else
            validInputPhone = false;


        // get check valid input
        let checkName = document.getElementById("checkName");
        let checkPhone = document.getElementById("checkPhone");
        let checkAdress = document.getElementById("checkAdress");
        let checkDistrict = document.getElementById("checkDistrict");
        let checkWard = document.getElementById("checkWard");
    

        // xử lý inputName
        if (inputName == "") {
            checkName.style.color = "#ff4d4d";
            checkName.innerHTML = "*Họ tên không được để trống."
            nameSuccess = false;
        } else if (validInputName == true) {
            checkName.style.color = "#ff4d4d";
            checkName.innerHTML = "*Họ tên không hợp lệ.";
            nameSuccess = false;
        } else {
            checkName.style.color = "white";
            checkName.innerHTML = "#";
            nameSuccess = true;
        }


        // xử lý inputPhone
        if (inputPhone == "") {
            checkPhone.style.color = "#ff4d4d";
            checkPhone.innerHTML = "*SĐT không được để trống."
            phoneSuccess = false;
        } else if (validInputPhone == false) {
            checkPhone.style.color = "#ff4d4d";
            checkPhone.innerHTML = "*SĐT không hợp lệ.";
            phoneSuccess = false;
        } else {
            checkPhone.style.color = "white";
            checkPhone.innerHTML = "#";
            phoneSuccess = true;
        }


        // xử lý inputAdress
        if (inputAdress == "") {
            checkAdress.style.color = "#ff4d4d";
            checkAdress.innerHTML = "*Địa chỉ không được để trống."
            adressSuccess = false;
        } else {
            checkAdress.style.color = "white";
            checkAdress.innerHTML = "#";
            adressSuccess = true;
        }

        // xử lý inputDistrict
        if (inputDistrict == "Chọn Quận/Huyện") {
            checkDistrict.style.color = "#ff4d4d";
            checkDistrict.innerHTML = "*Quận/Huyện không được để trống."
            districtSuccess = false;
        } else {
            checkDistrict.style.color = "white";
            checkDistrict.innerHTML = "#";
            districtSuccess = true;
        }

        // xử lý inputWard
        if (inputWard == "Chọn Phường/Xã") {
            checkWard.style.color = "#ff4d4d";
            checkWard.innerHTML = "*Phường/Xã không được để trống."
            wardSuccess = false;
        } else {
            checkWard.style.color = "white";
            checkWard.innerHTML = "#";
            wardSuccess = true;
        }

        if (nameSuccess && phoneSuccess && adressSuccess && districtSuccess && wardSuccess) {
            let nameField = document.querySelector('#user-name');
            let phoneField = document.querySelector('#user-phone');
            let adressField = document.querySelector('#text-adress');

            let districtEle = document.getElementById("InputDistrict");

            let districtText = districtEle.options[districtEle.selectedIndex].text;

            nameField.innerHTML = inputName;
            phoneField.innerHTML = inputPhone;
            adressField.innerHTML = inputAdress + ", " + inputWard + ", " + districtText + ", TPHCM";

            $('#ChangeAdressModal').modal('hide');
        } 
    });   
}




// đổ data phường/xã lên input
function dataWard() {
    let district1 = [
        'Phường Đa Kao',
        'Phường Bến Nghé',
        'Phường Bến Thành',
        'Phường Nguyễn Thái Bình',
        'Phường Phạm Ngũ Lão',
        'Phường Cầu Ông Lãnh',
        'Phường Cô Giang',
        'Phường Nguyễn Cư Trinh',
        'Phường Cầu Kho',
    ];

    let district2 = [
        'Phường An Phú',
        'Phường Bình An',
        'Phường Bình Trưng Đông',
        'Phường Bình Trưng Tây',
        'Phường Bình Khánh',
        'Phường An Khánh',
        'Phường Cát Lái',
        'Phường Thạnh Mỹ Lợi',
        'Phường An Lợi Đông',
        'Phường Thủ Thiêm',
    ];

    let district3 = [
        'Phường 01',
        'Phường 02',
        'Phường 03',
        'Phường 04',
        'Phường 05',
        'Phường 06',
        'Phường 08',
        'Phường 09',
        'Phường 10',
        'Phường 12',
        'Phường 13',
        'Phường 14',
    ];

    let district4 = [
        'Phường 01',
        'Phường 02',
        'Phường 03',
        'Phường 04',
        'Phường 05',
        'Phường 06',
        'Phường 08',
        'Phường 09',
        'Phường 10',
        'Phường 12',
        'Phường 13',
        'Phường 14',
        'Phường 15',
        'Phường 16',
        'Phường 18',
    ];

    let district5 = [
        'Phường 01',
        'Phường 02',
        'Phường 03',
        'Phường 04',
        'Phường 05',
        'Phường 06',
        'Phường 08',
        'Phường 09',
        'Phường 10',
        'Phường 12',
        'Phường 13',
        'Phường 14',
        'Phường 15',
    ]

    let district6 = [
        'Phường 01',
        'Phường 02',
        'Phường 03',
        'Phường 04',
        'Phường 05',
        'Phường 06',
        'Phường 08',
        'Phường 09',
        'Phường 10',
        'Phường 12',
        'Phường 13',
        'Phường 14',
    ]

    let district7 = [
        'Phường Tân Thuận Đông',
        'Phường Tân Thuận Tây',
        'Phường Tân Kiểng',
        'Phường Tân Hưng',
        'Phường Bình Thuận',
        'Phường Tân Quy',
        'Phường Phú Thuận',
        'Phường Tân Phú',
        'Phường Tân Phong',
        'Phường Phú Mỹ',
    ]

    let district8 = [
        'Phường 01',
        'Phường 02',
        'Phường 03',
        'Phường 04',
        'Phường 05',
        'Phường 06',
        'Phường 08',
        'Phường 09',
        'Phường 10',
        'Phường 12',
        'Phường 13',
        'Phường 14',
        'Phường 15',
        'Phường 16',
    ]

    let district9 = [
        'Phường Long Bình',
        'Phường Long Thạnh Mỹ',
        'Phường Tân Phú',
        'Phường Hiệp Phú',
        'Phường Tăng Nhơn Phú A',
        'Phường Tăng Nhơn Phú B',
        'Phường Phước Long B',
        'Phường Phước Long A',
        'Phường Trường Thạnh',
        'Phường Long Phước',
        'Phường Long Trường',
        'Phường Phước Bình',
        'Phường Phú Hữu',
    ]

    let district10 = [
        'Phường 01',
        'Phường 02',
        'Phường 03',
        'Phường 04',
        'Phường 05',
        'Phường 06',
        'Phường 08',
        'Phường 09',
        'Phường 10',
        'Phường 12',
        'Phường 13',
        'Phường 14',
        'Phường 15',
    ]

    let district11 = [
        'Phường 01',
        'Phường 02',
        'Phường 03',
        'Phường 04',
        'Phường 05',
        'Phường 06',
        'Phường 08',
        'Phường 09',
        'Phường 10',
        'Phường 12',
        'Phường 13',
        'Phường 14',
        'Phường 15',
        'Phường 16',
    ]

    let district12 = [
        'Phường Thạnh Xuân',
        'Phường Thạnh Lộc',
        'Phường Hiệp Thành',
        'Phường Thới An',
        'Phường Tân Chánh Hiệp',
        'Phường An Phú Đông',
        'Phường Tân Thới Hiệp',
        'Phường Trung Mỹ Tây',
        'Phường Tân Hưng Thuận',
        'Phường Đông Hưng Thuận',
        'Phường Tân Thới Nhất',
    ]

    let BinhThanh = [
        'Phường 01',
        'Phường 02',
        'Phường 03',
        'Phường 04',
        'Phường 05',
        'Phường 06',
        'Phường 08',
        'Phường 09',
        'Phường 10',
        'Phường 12',
        'Phường 13',
        'Phường 14',
        'Phường 15',
        'Phường 16',
        'Phường 17',
        'Phường 18',
        'Phường 19',
        'Phường 20',
        'Phường 21',
        'Phường 22',
        'Phường 23',
        'Phường 24',
        'Phường 25',
        'Phường 26',
        'Phường 27',
        'Phường 28',
    ]

    let GoVap = [
        'Phường 01',
        'Phường 02',
        'Phường 03',
        'Phường 04',
        'Phường 05',
        'Phường 06',
        'Phường 08',
        'Phường 09',
        'Phường 10',
        'Phường 12',
        'Phường 13',
        'Phường 14',
        'Phường 15',
        'Phường 16',
        'Phường 17',
    ]

    let ThuDuc = [
        'Phường Linh Xuân',
        'Phường Bình Chiểu',
        'Phường Linh Trung',
        'Phường Tam Bình',
        'Phường Tam Phú',
        'Phường Hiệp Bình Phước',
        'Phường Hiệp Bình Chánh',
        'Phường Linh Chiểu',
        'Phường Linh Tây',
        'Phường Linh Đông',
        'Phường Bình Thọ',
        'Phường Trường Thọ',
    ]

    let BinhTan = [
        'Phường Bình Hưng Hòa',
        'Phường Bình Hưng Hoà A',
        'Phường Bình Hưng Hoà B',
        'Phường Bình Trị Đông',
        'Phường Bình Trị Đông A',
        'Phường Bình Trị Đông B',
        'Phường Tân Tạo',
        'Phường Tân Tạo A',
        'Phường An Lạc',
        'Phường An Lạc A',
    ]

    let TanPhu = [
        'Phường Tân Sơn Nhì',
        'Phường Tây Thạnh',
        'Phường Sơn Kỳ',
        'Phường Tân Qúy',
        'Phường Tân Thành',
        'Phường Phú Thọ Hoà',
        'Phường Phú Thạnh',
        'Phường Phú Trung',
        'Phường Hoà Thạnh',
        'Phường Hiệp Tân',
        'Phường Tân Thới Hoà',
    ]

    let TanBinh = [
        'Phường 01',
        'Phường 02',
        'Phường 03',
        'Phường 04',
        'Phường 05',
        'Phường 06',
        'Phường 08',
        'Phường 09',
        'Phường 10',
        'Phường 12',
        'Phường 13',
        'Phường 14',
        'Phường 15',
    ]

    let PhuNhuan = [
        'Phường 01',
        'Phường 02',
        'Phường 03',
        'Phường 04',
        'Phường 05',
        'Phường 06',
        'Phường 08',
        'Phường 09',
        'Phường 10',
        'Phường 12',
        'Phường 13',
        'Phường 14',
        'Phường 15',
        'Phường 16',
        'Phường 17',
    ]

    let CuChi = [
        'Thị trấn Củ Chi',
        'Xã Phú Mỹ Hưng',
        'Xã An Phú',
        'Xã Trung Lập Thượng',
        'Xã An Nhơn Tây',
        'Xã Nhuận Đức',
        'Xã Phạm Văn Cội',
        'Xã Phú Hòa Đông',
        'Xã Trung Lập Hạ',
        'Xã Trung An',
        'Xã Phước Thạnh',
        'Xã Phước Hiệp',
        'Xã Tân An Hội',
        'Xã Phước Vĩnh An',
        'Xã Thái Mỹ',
        'Xã Tân Thạnh Tây',
        'Xã Hòa Phú',
        'Xã Tân Thạnh Đông',
        'Xã Bình Mỹ',
        'Xã Tân Phú Trung',
        'Xã Tân Thông Hội',
    ]

    let HocMon = [
        'Thị trấn Hóc Môn',
        'Xã Tân Hiệp',
        'Xã Nhị Bình',
        'Xã Đông Thạnh',
        'Xã Tân Thới Nhì',
        'Xã Thới Tam Thôn',
        'Xã Xuân Thới Sơn',
        'Xã Tân Xuân',
        'Xã Xuân Thới Đông',
        'Xã Trung Chánh',
        'Xã Xuân Thới Thượng',
        'Xã Bà Điểm',
    ]

    let BinhChanh = [
        'Thị trấn Tân Túc',
        'Xã Phạm Văn Hai',
        'Xã Vĩnh Lộc A',
        'Xã Vĩnh Lộc B',
        'Xã Bình Lợi',
        'Xã Lê Minh Xuân',
        'Xã Tân Nhựt',
        'Xã Tân Kiên',
        'Xã Bình Hưng',
        'Xã Phong Phú',
        'Xã An Phú Tây',
        'Xã Hưng Long',
        'Xã Đa Phước',
        'Xã Tân Quý Tây',
        'Xã Bình Chánh',
        'Xã Quy Đức',
    ]

    let NhaBe = [
        'Thị trấn Nhà Bè',
        'Xã Phước Kiển',
        'Xã Phước Lộc',
        'Xã Nhơn Đức',
        'Xã Phú Xuân',
        'Xã Long Thới',
        'Xã Hiệp Phước',
    ]

    let CanGio = [
        'Thị trấn Cần Thạnh',
        'Xã Bình Khánh',
        'Xã Tam Thôn Hiệp',
        'Xã An Thới Đông',
        'Xã Thạnh An',
        'Xã Long Hòa',
        'Xã Lý Nhơn',
    ]

    /*
    let inputWard = document.querySelector('#InputWard');
    let inputDistrict =  document.querySelector('#InputDistrict');

    inputWard.addEventListener('click', function() {   // Nếu click vào inputward thì đổ data vào
        if (inputDistrict.value == "1") {
            addWard(district1, inputWard);
        } else if (inputDistrict.value == "2") {
            addWard(district2, inputWard);
        }
    });*/

    let opListEle = document.querySelectorAll('.option-district');

    let inputDistrict =  document.querySelector('#InputDistrict');

    inputDistrict.addEventListener('change', function() {
        //console.log(inputDistrict.value);

        let inputWard = document.querySelector('#InputWard');
        inputWard.innerHTML = `<option selected>Chọn Phường/Xã</option>`;

        if (inputDistrict.value == "1") {
            addWard(district1, inputWard);
        } else if (inputDistrict.value == "2") {
            addWard(district2, inputWard);
        } else if (inputDistrict.value == "3") {
            addWard(district3, inputWard);
        } else if (inputDistrict.value == "4") {
            addWard(district4, inputWard);
        } else if (inputDistrict.value == "5") {
            addWard(district5, inputWard);
        } else if (inputDistrict.value == "6") {
            addWard(district6, inputWard);
        } else if (inputDistrict.value == "7") {
            addWard(district7, inputWard);
        } else if (inputDistrict.value == "8") {
            addWard(district8, inputWard);
        } else if (inputDistrict.value == "9") {
            addWard(district9, inputWard);
        } else if (inputDistrict.value == "10") {
            addWard(district10, inputWard);
        } else if (inputDistrict.value == "11") {
            addWard(district11, inputWard);
        } else if (inputDistrict.value == "12") {
            addWard(district12, inputWard);
        } else if (inputDistrict.value == "13") {
            addWard(BinhThanh, inputWard);
        } else if (inputDistrict.value == "14") {
            addWard(GoVap, inputWard);
        } else if (inputDistrict.value == "15") {
            addWard(ThuDuc, inputWard);
        } else if (inputDistrict.value == "16") {
            addWard(BinhTan, inputWard);
        } else if (inputDistrict.value == "17") {
            addWard(TanPhu, inputWard);
        } else if (inputDistrict.value == "18") {
            addWard(TanBinh, inputWard);
        } else if (inputDistrict.value == "19") {
            addWard(PhuNhuan, inputWard);
        } else if (inputDistrict.value == "20") {
            addWard(CuChi, inputWard);
        } else if (inputDistrict.value == "21") {
            addWard(HocMon, inputWard);
        } else if (inputDistrict.value == "22") {
            addWard(BinhChanh, inputWard);
        } else if (inputDistrict.value == "23") {
            addWard(NhaBe, inputWard);
        } else if (inputDistrict.value == "24") {
            addWard(CanGio, inputWard);
        }
    })
}


function addWard(list, input) {
    for (i = 0; i < list.length; i++) {
        let opEle = document.createElement('option');
        opEle.classList.add("option-ward");
        opEle.innerHTML = list[i];
        input.appendChild(opEle);
    }
}



changeAdress();
cancelButtonChangeAdress();
//buttonChange();
buyButton();
dataWard();
//saveAdressChange();




