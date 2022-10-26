const MaKH = 18;

// reset form Sign Up
function resetSignUp() {
    // Xử lý input
    document.getElementById("InputNameSignUp").value = "";
    document.getElementById("InputEmailSignUp").value = "";
    document.getElementById("InputPhoneSignUp").value = "";
    document.getElementById("InputSexSignUp").value = "Chọn giới tính";
    document.getElementById("InputAdressSignUp").value = "";
    document.getElementById("InputUserNameSignUp").value = "";
    document.getElementById("InputPasswordSignUp").value = "";
    document.getElementById("ConfirmPasswordSignUp").value = "";
    document.getElementById("InputDistrictSignUp").value = "Chọn Quận/Huyện";
    document.getElementById("InputWardSignUp").value = "Chọn Phường/Xã";
    
    // Xử lý valid
    let checkNameSignUp = document.getElementById("checkNameSignUp");
    let checkEmailSignUp = document.getElementById("checkEmailSignUp");
    let checkPhoneSignUp = document.getElementById("checkPhoneSignUp");
    let checkSexSignUp = document.getElementById("checkSexSignUp");
    let checkAdressSignUp = document.getElementById("checkAdressSignUp");
    let checkUserNameSignUp = document.getElementById("checkUserNameSignUp");
    let checkPassSignUp = document.getElementById("checkPassSignUp");
    let checkConfirmPassSignUp = document.getElementById("checkConfirmPassSignUp");
    let checkDistrictSignUp = document.getElementById("checkDistrictSignUp");
    let checkWardSignUp = document.getElementById("checkWardSignUp");

    checkNameSignUp.style.color = "white";
    checkNameSignUp.innerHTML = "#";

    checkEmailSignUp.style.color = "white";
    checkEmailSignUp.innerHTML = "#";

    checkPhoneSignUp.style.color = "white";
    checkPhoneSignUp.innerHTML = "#";

    checkSexSignUp.style.color = "white";
    checkSexSignUp.innerHTML = "#";

    checkAdressSignUp.style.color = "white";
    checkAdressSignUp.innerHTML = "#";

    checkUserNameSignUp.style.color = "white";
    checkUserNameSignUp.innerHTML = "#";

    checkPassSignUp.style.color = "white";
    checkPassSignUp.innerHTML = "#";

    checkConfirmPassSignUp.style.color = "white";
    checkConfirmPassSignUp.innerHTML = "#";

    checkDistrictSignUp.style.color = "white";
    checkDistrictSignUp.innerHTML = "#";

    checkWardSignUp.style.color = "white";
    checkWardSignUp.innerHTML = "#";
}


// Sự kiện của nút Xóa trong form Sign Up
function cancelButtonSignUp() {
    let btnCanelSignUp = document.querySelector('#btn-cancel-signup');

    btnCanelSignUp.addEventListener('click', function() {
       resetSignUp();
    });
}

// Xử lý sự kiện của form Sign Up
function SignUp() {
    let btnSignUp = document.querySelector('#btn-signup');

    let nameSuccess = false;
    let emailSuccess = false;
    let phoneSuccess = false;
    let sexSuccess = false;
    let adressSuccess = false;
    let userNameSuccess = false;
    let passSuccess = false;
    let confirmPassSuccess = false;
    let districtSuccess = false;
    let wardSuccess = false;

    btnSignUp.addEventListener('click', function() {
        // get input
        let inputName = document.getElementById("InputNameSignUp").value;
        let inputEmail = document.getElementById("InputEmailSignUp").value;
        let inputPhone = document.getElementById("InputPhoneSignUp").value;
        let inputSex = document.getElementById("InputSexSignUp").value;
        let inputAdress = document.getElementById("InputAdressSignUp").value;
        let inputUserName = document.getElementById("InputUserNameSignUp").value;
        let inputPassword = document.getElementById("InputPasswordSignUp").value;
        let confirmPassword = document.getElementById("ConfirmPasswordSignUp").value;
        let inputDistrict = document.getElementById("InputDistrictSignUp").value;
        let inputWard = document.getElementById("InputWardSignUp").value;

        // check valid input
        let validInputName = /^[0-9]+$/.test(inputName);
        
        let validInputEmail = /\S+@\S+\.\S+/.test(inputEmail);
       
        let validInputPhone = true;
        if (/^[0-9]{1,10}$/.test(inputPhone) && inputPhone.match(/\d/g).length === 10)
            validInputPhone = true;
        else
            validInputPhone = false;

        let validInputPass = null;
        if (inputPassword.localeCompare(confirmPassword) == 0)
            validInputPass = true;
        else
            validInputPass = false;


        // get check valid input
        let checkNameSignUp = document.getElementById("checkNameSignUp");
        let checkEmailSignUp = document.getElementById("checkEmailSignUp");
        let checkPhoneSignUp = document.getElementById("checkPhoneSignUp");
        let checkSexSignUp = document.getElementById("checkSexSignUp");
        let checkAdressSignUp = document.getElementById("checkAdressSignUp");
        let checkUserNameSignUp = document.getElementById("checkUserNameSignUp");
        let checkPassSignUp = document.getElementById("checkPassSignUp");
        let checkConfirmPassSignUp = document.getElementById("checkConfirmPassSignUp");
        let checkDistrictSignUp = document.getElementById("checkDistrictSignUp");
        let checkWardSignUp = document.getElementById("checkWardSignUp");


        // xử lý inputName
        if (inputName == "") {
            checkNameSignUp.style.color = "#ff4d4d";
            checkNameSignUp.innerHTML = "*Họ tên không được để trống."
            nameSuccess = false;
        } else if (validInputName == true) {
            checkNameSignUp.style.color = "#ff4d4d";
            checkNameSignUp.innerHTML = "*Họ tên không hợp lệ.";
            nameSuccess = false;
        } else {
            checkNameSignUp.style.color = "white";
            checkNameSignUp.innerHTML = "#";
            nameSuccess = true;
        }

        // xử lý inputEmail
        if (inputEmail == "") {
            checkEmailSignUp.style.color = "#ff4d4d";
            checkEmailSignUp.innerHTML = "*Email không được để trống."
            emailSuccess = false;
        } else if (validInputEmail == false) {
            checkEmailSignUp.style.color = "#ff4d4d";
            checkEmailSignUp.innerHTML = "*Email không hợp lệ.";
            emailSuccess = false;
        } else {
            checkEmailSignUp.style.color = "white";
            checkEmailSignUp.innerHTML = "#";
            emailSuccess = true;
        }

        // xử lý inputPhone
        if (inputPhone == "") {
            checkPhoneSignUp.style.color = "#ff4d4d";
            checkPhoneSignUp.innerHTML = "*SĐT không được để trống."
            phoneSuccess = false;
        } else if (validInputPhone == false) {
            checkPhoneSignUp.style.color = "#ff4d4d";
            checkPhoneSignUp.innerHTML = "*SĐT không hợp lệ.";
            phoneSuccess = false;
        } else {
            checkPhoneSignUp.style.color = "white";
            checkPhoneSignUp.innerHTML = "#";
            phoneSuccess = true;
        }

        // xử lý inputSex
        if (inputSex != 1 && inputSex != 2 && inputSex != 3) {
            checkSexSignUp.style.color = "#ff4d4d";
            checkSexSignUp.innerHTML = "*Giới tính không được để trống."
            sexSuccess = false;
        } else {
            checkSexSignUp.style.color = "white";
            checkSexSignUp.innerHTML = "#";
            sexSuccess = true;
        }

        // xử lý inputAdress
        if (inputAdress == "") {
            checkAdressSignUp.style.color = "#ff4d4d";
            checkAdressSignUp.innerHTML = "*Địa chỉ không được để trống."
            adressSuccess = false;
        } else {
            checkAdressSignUp.style.color = "white";
            checkAdressSignUp.innerHTML = "#";
            adressSuccess = true;
        }

        // xử lý inputUsername
        if (inputUserName == "") {
            checkUserNameSignUp.style.color = "#ff4d4d";
            checkUserNameSignUp.innerHTML = "*Tên đăng nhập không được để trống."
            userNameSuccess = false;
        } else if (inputUserName.length < 6) {
            checkUserNameSignUp.style.color = "#ff4d4d";
            checkUserNameSignUp.innerHTML = "*Tên đăng nhập phải có hơn 5 ký tự.";
            userNameSuccess = false;
        }
        else {
            checkUserNameSignUp.style.color = "white";
            checkUserNameSignUp.innerHTML = "#";
            userNameSuccess = true;
        }

        // xử lý inputPassword
        if (inputPassword == "") {
            checkPassSignUp.style.color = "#ff4d4d";
            checkPassSignUp.innerHTML = "*Mật khẩu không được để trống."
            passSuccess = false;
        } else {
            checkPassSignUp.style.color = "white";
            checkPassSignUp.innerHTML = "#";
            passSuccess = true;
        }

        // xử lý ConfirmPassword
        if (confirmPassword == "") {
            checkConfirmPassSignUp.style.color = "#ff4d4d";
            checkConfirmPassSignUp.innerHTML = "*Xác nhận mật khẩu không được để trống."
            confirmPassSuccess = false;
        } else if (validInputPass == false) {
            checkConfirmPassSignUp.style.color = "#ff4d4d";
            checkConfirmPassSignUp.innerHTML = "*Xác nhận mật khẩu không hợp lệ.";
            confirmPassSuccess = false;
        }
        else {
            checkConfirmPassSignUp.style.color = "white";
            checkConfirmPassSignUp.innerHTML = "#";
            confirmPassSuccess = true;
        }

        // xử lý inputDistrict
        if (inputDistrict == "Chọn Quận/Huyện") {
            checkDistrictSignUp.style.color = "#ff4d4d";
            checkDistrictSignUp.innerHTML = "*Quận/Huyện không được để trống."
            districtSuccess = false;
        } else {
            checkDistrictSignUp.style.color = "white";
            checkDistrictSignUp.innerHTML = "#";
            districtSuccess = true;
        }

        // xử lý inputWard
        if (inputWard == "Chọn Phường/Xã") {
            checkWardSignUp.style.color = "#ff4d4d";
            checkWardSignUp.innerHTML = "*Phường/Xã không được để trống."
            wardSuccess = false;
        } else {
            checkWardSignUp.style.color = "white";
            checkWardSignUp.innerHTML = "#";
            wardSuccess = true;
        }

        //console.log(districtSuccess);
        //if (nameSuccess && emailSuccess && phoneSuccess && sexSuccess && adressSuccess && userNameSuccess && passSuccess && confirmPassSuccess && districtSuccess && wardSuccess) {
        if (nameSuccess == true && emailSuccess == true && phoneSuccess == true && sexSuccess == true && adressSuccess == true && userNameSuccess == true&& passSuccess == true && confirmPassSuccess == true && districtSuccess == true && wardSuccess == true) {
            // change header
            document.getElementById("userName").innerHTML = inputName;
            document.getElementById("account").style.visibility = "visible";
            document.getElementById("signin-signup").style.visibility = "hidden";

            let infoUser = {
                MaKH: MaKH,
                name: inputName,
                email: inputEmail,
                phone: inputPhone,
                sex: inputSex,
                adress: inputAdress,
                ward: inputWard,
                district: inputDistrict,
                username: inputUserName,
                password: inputPassword,
            }
            
            fetch('/', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(infoUser),
            })
            .then(response => response.json())
            .then(data => {
            })
            .catch((error) => {
                //console.error('Error:', error);
            });
            
            $('#SignUpModal').modal('hide');

            let local = {
                MaKH: MaKH,
                HoTen: inputName,
                SDT: inputPhone,
                Email: inputEmail,
                TenDangNhap: inputUserName,
                MatKhau: inputPassword,
                SoNhaDuong: inputAdress,
                PhuongXa: inputWard,
                QuanHuyen: inputDistrict,
                GioiTinh: inputSex,
            }
            
            localStorage.setItem("KhachHang", JSON.stringify(local));

        } 
    });   
}

// Xử lý sự kiện của form Sign In
function SignIn() {
	var btnSignIn = document.querySelector('#btn-signin')

    let success = true;

    let userNameEmpty = false;
    let passEmpty = false;
		
	btnSignIn.addEventListener('click', function() {
        let inputUserName = document.getElementById("InputUserNameSignIn").value;
        let inputPassword = document.getElementById("InputPasswordSignIn").value;

        // check input userName ko được trống
        if (inputUserName == "") {
            checkUserNameSignIn.style.color = "#ff4d4d";
            checkUserNameSignIn.innerHTML = "*Tên đăng nhập không được để trống."
            userNameEmpty = true;
        } 
        else {
            checkUserNameSignIn.style.color = "white";
            checkUserNameSignIn.innerHTML = "#";
            userNameEmpty = false;
        }

        // check input password ko được trống
        if (inputPassword == "") {
            checkPassSignIn.style.color = "#ff4d4d";
            checkPassSignIn.innerHTML = "*Mật khẩu không được để trống."
            passEmpty = true;
        } else {
            checkPassSignIn.style.color = "white";
            checkPassSignIn.innerHTML = "#";
            passEmpty = false;
        }

        // Nếu input khác rỗng 
        if (userNameEmpty == false && passEmpty == false) {

            // Check ở database : Nếu success == true => Có tồn tại tài khoản 
            if (success) {
                
                fetch(`/api/home?username=${inputUserName}&password=${inputPassword}`,{method: 'GET'})
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    let item = JSON.parse(data);

                    if (item.length == 1){
                        $('#SignInModal').modal('hide');
                        
                        //
                        fetch(`/api/home/info?id=${item[0].MaKH}`,{method: 'GET'})
                        .then((response)=>{
                            return response.json();
                        })
                        .then((index)=>{
                            let info = JSON.parse(index)[0];
                            let local = {
                                MaKH: info.MaKH,
                                HoTen: info.TenKH,
                                SDT: info.SDT,
                                Email: info.Email,
                                TenDangNhap: info.TenDN,
                                MatKhau: info.MatKhau,
                                SoNhaDuong: info.SoNha,
                                PhuongXa: info.PX,
                                QuanHuyen: info.QH,
                                GioiTinh: info.GT,
                            }
                            localStorage.setItem("KhachHang", JSON.stringify(local));

                            // change 
                            document.getElementById("userName").innerHTML = info.TenKH;
                            document.getElementById("account").style.visibility = "visible";
                            document.getElementById("signin-signup").style.visibility = "hidden";
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                        //

                    }
                    else{
                        checkPassSignIn.style.color = "#ff4d4d";
                        checkPassSignIn.innerHTML = "*Tên đăng nhập hoặc mật khẩu không đúng."
                    }
                    
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

            } else {
                checkPassSignIn.style.color = "#ff4d4d";
                checkPassSignIn.innerHTML = "*Tên đăng nhập hoặc mật khẩu không được để trống."
            }
        }
	});
}
	

// reset form Sign In
function resetSignIn() {
    // Xử lý input
    document.getElementById("InputUserNameSignIn").value = "";
    document.getElementById("InputPasswordSignIn").value = "";

    // Xử lý valid
    let checkUserNameSignIn = document.getElementById("checkUserNameSignIn");
    let checkPassSignIn = document.getElementById("checkPassSignIn");

    checkUserNameSignIn.style.color = "white";
    checkUserNameSignIn.innerHTML = "#";

    checkPassSignIn.style.color = "white";
    checkPassSignIn.innerHTML = "#";
}

// Sự kiện của nút Xóa trong form Sign Up
function cancelButtonSignIn() {
    let btnCanelSignIn = document.querySelector('#btn-cancel-signin');

    btnCanelSignIn.addEventListener('click', function() {
       resetSignIn();
    });
}


// Sự kiện nút Đăng Nhập trong form SignUp và nút Đăng Ký trong form SignIn
function buttonHeaderInForm() {
    let btnSignIn = document.querySelector('#signin-btn-form-signup');

    btnSignIn.addEventListener('click', function() {
        $('#SignUpModal').modal('hide');
        $('#SignInModal').modal('show');
    });

    let btnSignUp = document.querySelector('#signup-btn-form-signin');
    btnSignUp.addEventListener('click', function() {
        $('#SignInModal').modal('hide');
        $('#SignUpModal').modal('show');
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


    let inputDistrict =  document.querySelector('#InputDistrictSignUp');

    inputDistrict.addEventListener('change', function() {
        //console.log(inputDistrict.value);

        let inputWard = document.querySelector('#InputWardSignUp');
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

function linkAccountPage(){
    document.getElementById('don-mua').onclick = function(){
        let info = JSON.parse(localStorage.getItem('KhachHang'));
        //console.log(info);
        if(info != null){
            window.location = `http://localhost:3001/account/all/all-${info.MaKH}`;
        }
    }
}

function updateCartLogoContent(){
    let prosucts = JSON.parse(localStorage.getItem('SanPham'));

    if(prosucts != null){
        let element = document.getElementById('cart-dropdown');
        
        element.innerHTML = '';
        prosucts.forEach(item => {
            
            if (item.Hinh.length > 0){
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
            }
            else {
                element.innerHTML += 
                `<a href="/detail?id=${item.MaSP}">
                    <div class="item-cart">
                        <div class='row no-gutters'>
                            <div class='col-md-2 col-sm-2 col-2'>
                                <img class='img-fluid' src='/images/products/empty.png'>
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
            }
            
        });
        
        document.getElementById('number-cart-products').innerHTML = prosucts.length;
    }
    
}

document.getElementById('search-btn').addEventListener("click", function() {
    let key = document.getElementById('search-input').value;
    window.location = `http://localhost:3001/products/search?key=${key}`;
});

SignUp();
SignIn();
cancelButtonSignIn();
cancelButtonSignUp();
buttonHeaderInForm();
dataWard();
linkAccountPage();
updateCartLogoContent();


// change header
let info = JSON.parse(localStorage.getItem('KhachHang'));

if (info != null){
    document.getElementById("userName").innerHTML = info.HoTen;
    document.getElementById("account").style.visibility = "visible";
    document.getElementById("signin-signup").style.visibility = "hidden";
}

//log-out
document.getElementById('log-out').addEventListener("click", function() {
    localStorage.setItem("KhachHang", null);
    window.location = `http://localhost:3001/`;
    
});