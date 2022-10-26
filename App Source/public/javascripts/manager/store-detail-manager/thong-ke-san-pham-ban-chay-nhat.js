/* ---------------------- Khi load trang -------------------*/

// Data ban đầu của x (ngày hôm nay)
let xDataInitial2 = []; // database
let yDataInitial2 = [];   // database

async function getBanChay() {

  let url = `http://localhost:3001/api/banchay-store/day/1`; 

  await fetch(url,{method: 'GET'})
  .then((response)=>{

      console.log('response: ' + response);
      return response.json();
  })
  .then(data => {
      let data_Str = JSON.parse(data);

      // Nếu chuỗi api trả về rỗng thì account ko có trong db      
        for (let i = 0; i < data_Str.length; i++) {
          xDataInitial2.push(data_Str[i].TenSP);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yDataInitial2.push(data_Str[i].BanChay_Day);
        }

  });
}

// Bar chart

  getBanChay();
  let chartContainer2 = document.querySelector('#chart-container2');
  let ctx2 = document.createElement("canvas");

  let myBarChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: xDataInitial2,               //xData
      datasets: [{
        label: "Revenue",
        backgroundColor: "#3d63d2",
        hoverBackgroundColor: "#1d357c",
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
        backgroundColor: "#3d63d2",
        hoverBackgroundColor: "#1d357c",
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

  const dataBanChay_Thang = await getBanChay_Month();
  const dataBanChay_Year = await getBanChay_Year();
  const dataBanChay_All = await getBanChay_All();

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
        min = 500000;
        max = 1000000;
      }  
      else if (btnContent == "Tháng này") {
        xData = dataBanChay_Thang.xBanChay_month;   // database
        yData = dataBanChay_Thang.yBanChay_moth; // database
        min = 100;
        max = 1000;
      } 
      else if (btnContent == "Năm nay") {
        xData = dataBanChay_Year.xBanChay_year; // database
        yData = dataBanChay_Year.yBanChay_year; // database
        min = 500;
        max = 5000;
      } 
      else if (btnContent == "Từ trước đến nay") {
        xData = dataBanChay_All.xBanChay_all; // database
        yData = dataBanChay_All.yBanChay_all; // database
        min = 1000;
        max = 10000;
      }

      dataChart2(xData, yData, max, min);
    });
  }
  
}

chartSelect2();

async function getBanChay_Month() {
  let xBanChay_month = [];
  let yBanChay_moth = [];
  
  let url = `http://localhost:3001/api/banchay-store/month/1`; 

  await fetch(url,{method: 'GET'})
  .then((response)=>{

      console.log('response: ' + response);
      return response.json();
  })
  .then(data => {
      let data_Str = JSON.parse(data);

      // Nếu chuỗi api trả về rỗng thì account ko có trong db      
        for (let i = 0; i < data_Str.length; i++) {
          xBanChay_month.push(data_Str[i].TenSP);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yBanChay_moth.push(data_Str[i].BanChay_Month);
        }

  });
  return {xBanChay_month, yBanChay_moth};
}

async function getBanChay_Year() {
  let xBanChay_year = [];
  let yBanChay_year = [];
  
  let url = `http://localhost:3001/api/banchay-store/year/1`; 

  await fetch(url,{method: 'GET'})
  .then((response)=>{

      console.log('response: ' + response);
      return response.json();
  })
  .then(data => {
      let data_Str = JSON.parse(data);

      // Nếu chuỗi api trả về rỗng thì account ko có trong db      
        for (let i = 0; i < data_Str.length; i++) {
          xBanChay_year.push(data_Str[i].TenSP);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yBanChay_year.push(data_Str[i].BanChay_Year);
        }

  });
  return {xBanChay_year, yBanChay_year};
}

async function getBanChay_All() {
  let xBanChay_all = [];
  let yBanChay_all = [];
  
  let url = `http://localhost:3001/api/banchay-store/all/1`; 

  await fetch(url,{method: 'GET'})
  .then((response)=>{

      console.log('response: ' + response);
      return response.json();
  })
  .then(data => {
      let data_Str = JSON.parse(data);

      // Nếu chuỗi api trả về rỗng thì account ko có trong db      
        for (let i = 0; i < data_Str.length; i++) {
          xBanChay_all.push(data_Str[i].TenSP);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yBanChay_all.push(data_Str[i].BanChay);
        }

  });
  return {xBanChay_all, yBanChay_all};
}