let btnChange = document.getElementById("ChangeBtn");
let btnSave =  document.getElementById("SaveBtn");
let btnReset = document.getElementById("ResetBtn");

btnChange.onclick = function(){
    btnChange.style.display = 'none';

    document.getElementById("TenDangNhap").removeAttribute("disabled");
    document.getElementById("HoTen").removeAttribute("disabled");
    document.getElementById("GioiTinh").removeAttribute("disabled");
    document.getElementById("email").removeAttribute("disabled");
    document.getElementById("sdt").removeAttribute("disabled");
    document.getElementById("DiaChi").removeAttribute("disabled");
}

btnSave.onclick = function(){
    btnChange.style.display = null;
    
    document.getElementById("TenDangNhap").setAttribute("disabled", "");
    document.getElementById("HoTen").setAttribute("disabled", "");
    document.getElementById("GioiTinh").setAttribute("disabled", "");
    document.getElementById("email").setAttribute("disabled", "");
    document.getElementById("sdt").setAttribute("disabled", "");
    document.getElementById("DiaChi").setAttribute("disabled", "");
}

document.getElementById('pills-all-tab').onclick = function(){
    let info = JSON.parse(localStorage.getItem('KhachHang'));
    //console.log(info);
    if(info != null){
        window.location = `http://localhost:3001/account/all/all-${info.MaKH}`;
    }
}

document.getElementById('pills-comfirm-tab').onclick = function(){
    let info = JSON.parse(localStorage.getItem('KhachHang'));
    //console.log(info);
    if(info != null){
        window.location = `http://localhost:3001/account/cxn/cxn-${info.MaKH}`;
    }
}

document.getElementById('pills-get-tab').onclick = function(){
    let info = JSON.parse(localStorage.getItem('KhachHang'));
    //console.log(info);
    if(info != null){
        window.location = `http://localhost:3001/account/clh/clh-${info.MaKH}`;
    }
}

document.getElementById('pills-delivery-tab').onclick = function(){
    let info = JSON.parse(localStorage.getItem('KhachHang'));
    //console.log(info);
    if(info != null ){
        window.location = `http://localhost:3001/account/dg/dg-${info.MaKH}`;
    }
}

document.getElementById('pills-delivered-tab').onclick = function(){
    let info = JSON.parse(localStorage.getItem('KhachHang'));
    //console.log(info);
    if(info != null){
        window.location = `http://localhost:3001/account/gtc/gtc-${info.MaKH}`;
    }
}

document.getElementById('pills-cancelled-tab').onclick = function(){
    let info = JSON.parse(localStorage.getItem('KhachHang'));
    //console.log(info);
    if(info != null){
        window.location = `http://localhost:3001/account/dh/dh-${info.MaKH}`;
    }
}


