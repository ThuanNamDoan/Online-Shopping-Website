/* ---------------------- Khi load trang -------------------*/

// Data ban đầu của x
let xDataInitial2 = []; // database
let yDataInitial2 = []; // database

// Bar chart
let chartContainer2 = document.querySelector('#chart-container2');
let ctx2 = document.createElement("canvas");

Get_API_ProductSal_All();

let myBarChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: xDataInitial2,               //xData
    datasets: [{
      label: "Revenue",
      backgroundColor: "#33b1c4",
      hoverBackgroundColor: "#1f6e7a",
      borderColor: "#4e73df",
      data: yDataInitial2,               // yData
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 10
        },
        maxBarThickness: 15,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 250,
          maxTicksLimit: 11,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value) + ' lượt';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          return 'Lượt bán: ' + number_format(tooltipItem.yLabel) + ' lượt'; 
        }
      }
    },
  }
});

chartContainer2.appendChild(ctx2);




/* ---------------------- Khi chọn kiểu xem -------------------*/
// Month
// fetch get api Product Sale
async function Get_API_ProductSal_Month() {

  let xDataSamPham_Thang = [];
  let yDataSanPham_Thang = [];

  let url = `http://localhost:3001/api/ProductSaleMonth`; 

  await fetch(url,{method: 'GET'})
  .then((response)=>{

      console.log('response: ' + response);
      return response.json();
  })
  .then(data => {
      let data_Str = JSON.parse(data);

      // Nếu chuỗi api trả về rỗng thì account ko có trong db
      if(data_Str == ""){
          alert('Empty data');
      }else{         
        for (let i = 0; i < data_Str.length; i++) {
          xDataSamPham_Thang.push(data_Str[i].TenSP);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yDataSanPham_Thang.push(data_Str[i].TongSL);
        }
      }

  });
  return {xDataSamPham_Thang, yDataSanPham_Thang};
}


// Year
// fetch get api Product Sale
async function Get_API_ProductSal_Year() {

  let xDataSamPham_Nam = [];
  let yDataSanPham_Nam = [];

  let url = `http://localhost:3001/api/ProductSaleYear`; 

  await fetch(url,{method: 'GET'})
  .then((response)=>{

      console.log('response: ' + response);
      return response.json();
  })
  .then(data => {
      let data_Str = JSON.parse(data);

      // Nếu chuỗi api trả về rỗng thì account ko có trong db
      if(data_Str == ""){
          alert('Empty data');
      }else{         
        for (let i = 0; i < data_Str.length; i++) {
          xDataSamPham_Nam.push(data_Str[i].TenSP);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yDataSanPham_Nam.push(data_Str[i].TongSL);
        }
      }

  });
  return {xDataSamPham_Nam, yDataSanPham_Nam};
}


// All
// fetch get api Product Sale
async function Get_API_ProductSal_All() {

  let url = `http://localhost:3001/api/ProductSaleAll`; 

  await fetch(url,{method: 'GET'})
  .then((response)=>{

      console.log('response: ' + response);
      return response.json();
  })
  .then(data => {
      let data_Str = JSON.parse(data);

      // Nếu chuỗi api trả về rỗng thì account ko có trong db
      if(data_Str == ""){
          alert('Empty data');
      }else{         
        for (let i = 0; i < data_Str.length; i++) {
          xDataInitial2.push(data_Str[i].TenSP);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yDataInitial2.push(data_Str[i].TongSL);
        }
      }
  });
}


// put data vào bar chart
function dataChart2(xData, yData, max, min) {
  chartContainer2.innerHTML = "";
  let ctx2 = document.createElement("canvas");
  
  let myBarChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: xData,        //xData
      datasets: [{
        label: "Revenue",
        backgroundColor: "#33b1c4",
        hoverBackgroundColor: "#1f6e7a",
        borderColor: "#4e73df",
        data: yData         //yData
      }],
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 10
          },
          maxBarThickness: 15,
        }],
        yAxes: [{
          ticks: {
            min: min,
            max: max,
            maxTicksLimit: 11,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
              return number_format(value) + ' lượt';
            }
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        callbacks: {
          label: function(tooltipItem, chart) {
            return 'Lượt bán: ' + number_format(tooltipItem.yLabel) + ' lượt'; 
          }
        }
      },
    }
  });

  chartContainer2.appendChild(ctx2);
}


// Xử lý sự kiện click button

async function chartSelect2() {

  const dataSamPham_Thang = await Get_API_ProductSal_Month();
  const dataSanPham_Nam = await Get_API_ProductSal_Year();

  let optionListBtn = document.querySelectorAll('#dropdown-item2');
  let dropdownBtn = document.querySelector('#dropdownMenuButton2');

  for (i = 0; i < optionListBtn.length; i++) {
    optionListBtn[i].addEventListener('click', function(e) {
    
      let btn = e.target;
      let btnContent = btn.innerHTML;

      dropdownBtn.innerHTML = btnContent;
      

      let xData = null;             // xData  
      let yData = null              // yData
      let max = 0;
      let min = 0;

      if (btnContent == "Ngày hôm nay") {
        xData = xDataInitial2;
        yData = yDataInitial2;
        min = 0;
        max = 250;
      }  
      else if (btnContent == "Tháng này") {
        xData = dataSamPham_Thang.xDataSamPham_Thang;  // database
        yData = dataSamPham_Thang.yDataSanPham_Thang; // database
        min = 100;
        max = 1000;
      } 
      else if (btnContent == "Năm nay") {
        xData = dataSanPham_Nam.xDataSamPham_Nam; // database
        yData = dataSanPham_Nam.yDataSanPham_Nam; // database
        min = 500;
        max = 5000;
      } 
      else if (btnContent == "Từ trước đến nay") {
        xData = xDataInitial2; // database
        yData = yDataInitial2; // database
        min = 1000;
        max = 10000;
      }
      dataChart2(xData, yData, max, min);
    });
  }
  
}

chartSelect2();