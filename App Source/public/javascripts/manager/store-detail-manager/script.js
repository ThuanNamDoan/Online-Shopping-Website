let topBarTitle = document.querySelector('#top-bar-title');
topBarTitle.innerHTML = "Quản lý cửa hàng";

let navItemStore = document.querySelector('#store-manage-nav-item');
navItemStore.classList.add("active");

let navItemSystem = document.querySelector('#system-manage-nav-item');
navItemSystem.classList.remove("active");



async function Get_API_Revenue(maCH) {
    let url = `http://localhost:3001/api/chitiet-store/`+maCH; 
  
    await fetch(url,{method: 'GET'})
    .then((response)=>{
  
        console.log('response: ' + response);
        return response.json();
    })
    .then(data => {
        let data_Str = JSON.parse(data);
        // Nếu chuỗi api trả về rỗng thì account ko có trong db 
        var textnode1 = document.createTextNode(data_Str[0].DoanhThu);   
        document.getElementById('DoanhThu').appendChild(textnode1);
        var textnode2 = document.createTextNode(data_Str[0].SoSP);   
        document.getElementById('SoLuongSP').appendChild(textnode2);
        var textnode3 = document.createTextNode(data_Str[0].SoDonHang);   
        document.getElementById('SoLuongDH').appendChild(textnode3);
        var textnode4 = document.createTextNode(data_Str[0].SoSP);   
        document.getElementById('SoLuongDG').appendChild(textnode4);
    });
  }

let maCH = document.getElementById("maCH").textContent;
Get_API_Revenue(maCH);



