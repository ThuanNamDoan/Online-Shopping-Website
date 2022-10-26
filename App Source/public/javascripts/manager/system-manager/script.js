let topBarTitle = document.querySelector('#top-bar-title');
topBarTitle.innerHTML = "Quản lý hệ thống";

let navItemStore = document.querySelector('#store-manage-nav-item');
navItemStore.classList.remove("active");

let navItemSystem = document.querySelector('#system-manage-nav-item');
navItemSystem.classList.add("active");

async function Get_API_CardStoreNumber() {

    let url = `http://localhost:3001/api/cardStore`; 
  
    await fetch(url,{method: 'GET'})
    .then((response)=>{
  
        console.log('response: ' + response);
        return response.json();
    })
    .then(data => {
        let data_Str = JSON.parse(data);
        
        console.log(data_Str[0].number);
        // Nếu chuỗi api trả về rỗng thì account ko có trong db
        if(data_Str == ""){
            alert('Không lấy được');
        }else{         
            document.getElementById("SoLuongCuaHang").innerHTML = data_Str[0].number;
        }
  
    });
  }

  async function Get_API_CardUserNumber() {

    let url = `http://localhost:3001/api/cardUsers`; 
  
    await fetch(url,{method: 'GET'})
    .then((response)=>{
  
        console.log('response number user: ' + response);
        return response.json();
    })
    .then(data => {
        let data_Str = JSON.parse(data);
        
        console.log(data_Str[0].numberuser);
        // Nếu chuỗi api trả về rỗng thì account ko có trong db
        if(data_Str == ""){
            alert('Không lấy được');
        }else{         
            document.getElementById("SoLuongKhachHang").innerHTML = data_Str[0].numberuser;
        }
  
    });
  }

  async function Get_API_CardProductNumber() {

    let url = `http://localhost:3001/api/cardProduct`; 
  
    await fetch(url,{method: 'GET'})
    .then((response)=>{
  
        console.log('response number user: ' + response);
        return response.json();
    })
    .then(data => {
        let data_Str = JSON.parse(data);
        
        console.log(data_Str[0].numberuser);
        // Nếu chuỗi api trả về rỗng thì account ko có trong db
        if(data_Str == ""){
            alert('Không lấy được');
        }else{         
            document.getElementById("SoLuongMatHang").innerHTML = data_Str[0].numberproduct;
        }
  
    });
  }

  async function Get_API_CardOrderNumber() {

    let url = `http://localhost:3001/api/cardOrder`; 
  
    await fetch(url,{method: 'GET'})
    .then((response)=>{
  
        console.log('response number user: ' + response);
        return response.json();
    })
    .then(data => {
        let data_Str = JSON.parse(data);
        
        console.log(data_Str[0].numberuser);
        // Nếu chuỗi api trả về rỗng thì account ko có trong db
        if(data_Str == ""){
            alert('Không lấy được');
        }else{         
            document.getElementById("SoLuongDonHang").innerHTML = data_Str[0].numberorder;
        }
  
    });
  }

  Get_API_CardStoreNumber();
  Get_API_CardUserNumber();
  Get_API_CardProductNumber();
  Get_API_CardOrderNumber();
  