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

    // Xử lý valid
    let checkNameSignUp = document.getElementById("checkNameSignUp");
    let checkEmailSignUp = document.getElementById("checkEmailSignUp");
    let checkPhoneSignUp = document.getElementById("checkPhoneSignUp");
    let checkSexSignUp = document.getElementById("checkSexSignUp");
    let checkAdressSignUp = document.getElementById("checkAdressSignUp");
    let checkUserNameSignUp = document.getElementById("checkUserNameSignUp");
    let checkPassSignUp = document.getElementById("checkPassSignUp");
    let checkConfirmPassSignUp = document.getElementById("checkConfirmPassSignUp");

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
    var btnSignUp = document.querySelector('#btn-signup');

    var nameSuccess = false;
    var emailSuccess = false;
    var phoneSuccess = false;
    var sexSuccess = false;
    var adressSuccess = false;
    var userNameSuccess = false;
    var passSuccess = false;
    var confirmPassSuccess = false;

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

        // check valid input
        let validInputName = /^[A-Za-z\s]+$/.test(inputName);
        
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


        // xử lý inputName
        if (inputName == "") {
            checkNameSignUp.style.color = "#ff4d4d";
            checkNameSignUp.innerHTML = "*Họ tên không được để trống."
            nameSuccess = false;
        } else if (validInputName == false) {
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

        if (nameSuccess && emailSuccess && phoneSuccess && sexSuccess && adressSuccess && userNameSuccess && passSuccess && confirmPassSuccess) {
            // change header
            document.getElementById("userName").innerHTML = inputUserName;
            document.getElementById("account").style.visibility = "visible";
            document.getElementById("signin-signup").style.visibility = "hidden";
		
            $('#SignUpModal').modal('hide');
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
                // change 
                document.getElementById("userName").innerHTML = inputUserName;
                document.getElementById("account").style.visibility = "visible";
                document.getElementById("signin-signup").style.visibility = "hidden";
                
                $('#SignInModal').modal('hide');
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



SignUp();
SignIn();
cancelButtonSignIn();
cancelButtonSignUp();
buttonHeaderInForm();