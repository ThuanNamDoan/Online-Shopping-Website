// change header
let info = JSON.parse(localStorage.getItem('KhachHang'));

if (info != null){
    document.getElementById("userName").innerHTML = info.HoTen;
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

linkAccountPage()
