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

/* ---------------------- Khi load trang -------------------*/

let xDataInitial = []; // database
let yDataInitial = []; // database

async function getTotNhat_Day() {

  let url = `http://localhost:3001/api/totnhat-store/day/1`; 

  await fetch(url,{method: 'GET'})
  .then((response)=>{

      console.log('response: ' + response);
      return response.json();
  })
  .then(data => {
      let data_Str = JSON.parse(data);

      // Nếu chuỗi api trả về rỗng thì account ko có trong db      
        for (let i = 0; i < data_Str.length; i++) {
          xDataInitial.push(data_Str[i].TenSP);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yDataInitial.push(data_Str[i].SoSao);
        }

  });
}

// Bar Chart Example

  getTotNhat_Day();

  let chartContainer = document.querySelector('#chart-container1');
  let ctx = document.createElement("canvas");

  let myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xDataInitial,
      datasets: [{
        label: "Revenue",
        backgroundColor: "#f7c955",
        hoverBackgroundColor: "#aa7c08",
        borderColor: "#4e73df",
        data: yDataInitial,
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
            max: 5,
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
              return number_format(value) + ' sao';
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
            return 'Đánh giá: ' + number_format(tooltipItem.yLabel) + ' sao'; 
          }
        }
      },
    }
  });

  chartContainer.appendChild(ctx);




/* ---------------------- Khi chọn chart -------------------*/

function dataChart(xData, yData) {
  chartContainer.innerHTML = "";
  let ctx = document.createElement("canvas");
  let myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xData,        //xData 
      datasets: [{
        label: "Revenue",
        backgroundColor: "#f7c955",
        hoverBackgroundColor: "#aa7c08",
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
            min: 0,
            max: 5,
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
              return number_format(value) + ' sao';
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
            return 'Đánh giá: ' + number_format(tooltipItem.yLabel) + ' sao'; 
          }
        }
      },
    }
  });

  chartContainer.appendChild(ctx);
}


async function chartSelect() {

  const dataTotNhat_Thang = await getTotNhat_Month();
  const dataTotNhat_Year = await getTotNhat_Year();
  const dataTotNhat_All = await getTotNhat_All();

  let optionListBtn = document.querySelectorAll('#dropdown-item1');
  let dropdownBtn = document.querySelector('#dropdownMenuButton1');

  for (i = 0; i < optionListBtn.length; i++) {
    optionListBtn[i].addEventListener('click', function(e) {
      let btn = e.target;
      let btnContent = btn.innerHTML;

      dropdownBtn.innerHTML = btnContent;

      let xData = null;
      let yData = null

      if (btnContent == "Ngày hôm nay") {
        xData = xDataInitial; // database
        yData = yDataInitial; // database
      } else if (btnContent == "Năm nay") {
        xData = dataTotNhat_Year.xTotNhat_year; // database
        yData = dataTotNhat_Year.yTotNhat_year; // database
      } else if (btnContent == "Tháng này") {
        xData = dataTotNhat_Thang.xTotNhat_month; // database
        yData = dataTotNhat_Thang.yTotNhat_month; // database
      } else if (btnContent == "Từ trước đến nay") {
        xData = dataTotNhat_All.xTotNhat_all; // database
        yData = dataTotNhat_All.yTotNhat_all; // database
      }

      dataChart(xData, yData);
    });
  }
  
}

chartSelect();

async function getTotNhat_Month() {
  let xTotNhat_month = [];
  let yTotNhat_month = [];
  
  let url = `http://localhost:3001/api/totnhat-store/month/1`; 

  await fetch(url,{method: 'GET'})
  .then((response)=>{

      console.log('response: ' + response);
      return response.json();
  })
  .then(data => {
      let data_Str = JSON.parse(data);

      // Nếu chuỗi api trả về rỗng thì account ko có trong db      
        for (let i = 0; i < data_Str.length; i++) {
          xTotNhat_month.push(data_Str[i].TenSP);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yTotNhat_month.push(data_Str[i].SoSao);
        }

  });
  return {xTotNhat_month, yTotNhat_month};
}

async function getTotNhat_Year() {
  let xTotNhat_year = [];
  let yTotNhat_year = [];
  
  let url = `http://localhost:3001/api/totnhat-store/year/1`; 

  await fetch(url,{method: 'GET'})
  .then((response)=>{

      console.log('response: ' + response);
      return response.json();
  })
  .then(data => {
      let data_Str = JSON.parse(data);

      // Nếu chuỗi api trả về rỗng thì account ko có trong db      
        for (let i = 0; i < data_Str.length; i++) {
          xTotNhat_year.push(data_Str[i].TenSP);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yTotNhat_year.push(data_Str[i].SoSao);
        }

  });
  return {xTotNhat_year, yTotNhat_year};
}

async function getTotNhat_All() {
  let xTotNhat_all = [];
  let yTotNhat_all = [];
  
  let url = `http://localhost:3001/api/totnhat-store/all/1`; 

  await fetch(url,{method: 'GET'})
  .then((response)=>{

      console.log('response: ' + response);
      return response.json();
  })
  .then(data => {
      let data_Str = JSON.parse(data);

      // Nếu chuỗi api trả về rỗng thì account ko có trong db      
        for (let i = 0; i < data_Str.length; i++) {
          xTotNhat_all.push(data_Str[i].TenSP);
        }

        for (let i = 0; i < data_Str.length; i++) {
          yTotNhat_all.push(data_Str[i].SoSao);
        }

  });
  return {xTotNhat_all, yTotNhat_all};
}