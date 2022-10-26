// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';



/* ---------------------- Khi load trang -------------------*/

// get current date 
let currentDate = new Date();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

// get last day of current month
let d = new Date(currentYear, 3, 0);
let lastDayOfCurrentMonth = d.getUTCDate() + 1;

// xData theo ngày
let xDataMonth3 = [];  

for (let i = 1; i <= lastDayOfCurrentMonth; i++) {
    xDataMonth3.push(i);
}



// xData , yData initial
yDataMonth3 = [];  // database

// Area chart
let chartContainer3 = document.querySelector('#chart-container3');
let ctx3 = document.createElement("canvas");

Get_API_NumberOrder_Month();

let myLineChart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: xDataMonth3,
    datasets: [{
      label: "Số đơn hàng",
      lineTension: 0.3,
      backgroundColor: "#fffdf7",
      borderColor: "#d79e0f",
      pointRadius: 3,
      pointBackgroundColor: "#d79e0f",
      pointBorderColor: "#d79e0f",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "#a4810e",
      pointHoverBorderColor: "#a4810e",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: yDataMonth3,
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
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 31
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 15,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value) + ' đơn';
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
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          let datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
        },
        title: function (tooltipItem, chart) {
          let labelTooltip = chart['labels'][tooltipItem[0]['index']] + " h";
          return labelTooltip;
        }
      }
    }
  }
});

chartContainer3.appendChild(ctx3);





/* ------------------------- Khi chọn chart ---------------------- */
// Month
// fetch get api account
async function Get_API_NumberOrder_Month() {

  let url = `http://localhost:3001/api/OrderMonth`; 

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
        // for (let i = 0; i < data_Str.length; i++) {
        //   xDataMonth3.push(data_Str[i].Thang);
        // }

        console.log(xArray3);

        for (let i = 0; i < data_Str.length; i++) {
          yDataMonth3.push(data_Str[i].SLDon);
        }
      }

  });
}

// Year
// fetch get api account
async function Get_API_NumberOrder_Year() {

  let xDataDonHang_Nam = [];
  let yDataDonHang_Nam = [];

  let url = `http://localhost:3001/api/OrderYear`; 

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
        // for (let i = 0; i < data_Str.length; i++) {
        //   xDataDonHang_Nam.push(data_Str[i].Thang);
        // }

        for (let i = 0; i < data_Str.length; i++) {
          yDataDonHang_Nam.push(data_Str[i].SLDon);
        }
      }
  });
  return {xDataDonHang_Nam, yDataDonHang_Nam};
}

// put data vào bar chart
function dataChart3(xData, yData, titleItem, titleUnit) {
  chartContainer3.innerHTML = "";
  let ctx3 = document.createElement("canvas");

  let myLineChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: xData,
      datasets: [{
        label: "Số đơn hàng",
        lineTension: 0.3,
        backgroundColor: "#fffdf7",
        borderColor: "#d79e0f",
        pointRadius: 3,
        pointBackgroundColor: "#d79e0f",
        pointBorderColor: "#d79e0f",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "#a4810e",
        pointHoverBorderColor: "#a4810e",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: yData,
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
            unit: 'date'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 31
          }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 15,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
              return number_format(value) + ' đơn';
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
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: 'index',
        caretPadding: 10,
        callbacks: {
          label: function(tooltipItem, chart) {
            let datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
          },
          title: function (tooltipItem, chart) {
            let labelTooltip = titleItem + chart['labels'][tooltipItem[0]['index']] + titleUnit;
            return labelTooltip;
          }
        }
      }
    }
  });
  
  chartContainer3.appendChild(ctx3);
}


// Xử lý sự kiện click button

async function chartSelect3() {

  const dataDonHang_Nam = await Get_API_NumberOrder_Year();

  let optionListBtn = document.querySelectorAll('#dropdown-item3');
  let dropdownBtn = document.querySelector('#dropdownMenuButton3');

  for (i = 0; i < optionListBtn.length; i++) {
    optionListBtn[i].addEventListener('click', function(e) {
    
      let btn = e.target;
      let btnContent = btn.innerHTML;

      dropdownBtn.innerHTML = btnContent;

      let xData = null;             // xData  
      let yData = null              // yData
      let titleItem = "";
      let titleUnit = "";

      if (btnContent == "Tháng này") {
        xData = xDataMonth3;
        yData = yDataMonth3; // database
        titleItem = "Ngày "
      } 
      else if (btnContent == "Năm nay") {
        xData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        yData = dataDonHang_Nam.yDataDonHang_Nam; // database
        titleItem = "Tháng "
      } 

      dataChart3(xData, yData, titleItem, titleUnit);
    });
  }
  
}
chartSelect3();