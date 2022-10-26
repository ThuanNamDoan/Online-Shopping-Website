// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  let n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      let k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}




/* --------------- Khi load trang ----------------*/

let xDataInitial = []; // database
let yDataInitial = []; // database


// Bar Chart Example
let chartContainer = document.querySelector('#chart-container1');
let ctx = document.createElement("canvas");

Get_API_Revenue_All();

let myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: xDataInitial,    
    datasets: [{
      label: "Revenue",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: yDataInitial
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
          min: 1000, 
          max: 5000,
          maxTicksLimit: 15,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value) + 'đ';
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
          return 'Doanh thu: ' + number_format(tooltipItem.yLabel) + 'đ'; 
        }
      }
    },
  }
});

chartContainer.appendChild(ctx);




/* -------------- khi chọn chart --------------- */


function dataChart(xData, yData, max, min) {
  chartContainer.innerHTML = "";
  let ctx = document.createElement("canvas");
  let myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xData,        //xData
      datasets: [{
        label: "Revenue",
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
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
            maxTicksLimit: 15,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
              return number_format(value) + 'đ';
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
            return 'Doanh thu: ' + number_format(tooltipItem.yLabel) + 'đ'; 
          }
        }
      },
    }
  });

  chartContainer.appendChild(ctx);
}

// Month
// fetch get api account
async function Get_API_Revenue_Month() {

  let xDataDoanhThu_CuaHang_Thang = [];
  let yDataDoanhThu_CuaHang_Thang = [];

  let url = `http://localhost:3001/api/revenueMonth`; 

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
          xDataDoanhThu_CuaHang_Thang.push(data_Str[i].TenCuaHang);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yDataDoanhThu_CuaHang_Thang.push(data_Str[i].DoanhThu);
        }
      }

  });
  return {xDataDoanhThu_CuaHang_Thang, yDataDoanhThu_CuaHang_Thang};
}


// Year
// fetch get api account
async function Get_API_Revenue_Year() {

  let xDataDoanhThu_CuaHang_Nam = [];
  let yDataDoanhThu_CuaHang_Nam = [];

  let url = `http://localhost:3001/api/revenueYear`; 

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
          xDataDoanhThu_CuaHang_Nam.push(data_Str[i].TenCuaHang);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yDataDoanhThu_CuaHang_Nam.push(data_Str[i].DoanhThu);
        }
      }

  });
  return {xDataDoanhThu_CuaHang_Nam, yDataDoanhThu_CuaHang_Nam};
}

// Year
// fetch get api account
async function Get_API_Revenue_All() {

  let url = `http://localhost:3001/api/revenueAll`; 

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
          xDataInitial.push(data_Str[i].TenCuaHang);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yDataInitial.push(data_Str[i].DoanhThu);
        }
      }

  });
}
// var xArray = ["Store4", "Store22", "Store34", "Store24", "Store45", "Store16", "Store27", "Store8", "Store5", "Store1"]; OLD
// var yArray = [18120, 17225, 16212, 14337, 12538, 10432, 10212, 9318, 5318, 2114]; OLD

async function chartSelect() {

  const dataDoanhThu_CuaHang_Thang =  await Get_API_Revenue_Month();
  const dataDoanhThu_CuaHang_Nam = await Get_API_Revenue_Year();

  let optionListBtn = document.querySelectorAll('#dropdown-item1');
  let dropdownBtn = document.querySelector('#dropdownMenuButton1');

  for (i = 0; i < optionListBtn.length; i++) {
    optionListBtn[i].addEventListener('click', function(e) {
      let btn = e.target;
      let btnContent = btn.innerHTML;

      dropdownBtn.innerHTML = btnContent;

      let xData = null;
      let yData = null
      let max = 0;
      let min = 0

      if (btnContent == "Ngày hôm nay") {
        xData = xDataInitial;
        yData = yDataInitial;
        min = 1000;
        max = 5000;
      } else if (btnContent == "Tháng này") {
        xData = dataDoanhThu_CuaHang_Thang.xDataDoanhThu_CuaHang_Thang; // database OK
        yData = dataDoanhThu_CuaHang_Nam.yDataDoanhThu_CuaHang_Nam;   // database OK
        min = 1000;
        max = 20000;
      }
      else if (btnContent == "Năm nay") {
        xData = dataDoanhThu_CuaHang_Nam.yDataDoanhThu_CuaHang_Nam; // database
        yData = dataDoanhThu_CuaHang_Nam.yDataDoanhThu_CuaHang_Nam; // database
        min = 10000;
        max = 100000;
      } else if (btnContent == "Từ trước đến nay") {
        xData = xDataInitial; // database
        yData = yDataInitial; // database
        min = 20000;
        max = 200000;
      }

      dataChart(xData, yData, max, min);
    });
  }
  
}

chartSelect();