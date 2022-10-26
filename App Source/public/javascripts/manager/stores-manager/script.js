// Call the dataTables jQuery plugin
/*$(document).ready(function() {
    
    $('#dataTable').DataTable();
   


});*/

$('#dataTable').dataTable( {
    "oLanguage": {
      "sLengthMenu": "Hiển thị _MENU_ dòng",
      "sSearch": "Tìm kiếm:",
      "sInfo": "Hiển thị _START_ đến _END_ trong tổng cộng _TOTAL_ kết quả",
      "oPaginate": {
        "sPrevious": "Trước",
        "sNext": "Sau",
        "sFirst": "Đầu tiên",
        "sLast": "Cuối cùng",
      }
    }
});

let topBarTitle = document.querySelector('#top-bar-title');
topBarTitle.innerHTML = "Quản lý cửa hàng";

let navItemStore = document.querySelector('#store-manage-nav-item');
navItemStore.classList.add("active");

let navItemSystem = document.querySelector('#system-manage-nav-item');
navItemSystem.classList.remove("active");

let detail = document.getElementById('link-store');
let maCH = document.getElementById('store-id');


detail.onclick = function(){
  let number = maCH.textContent;
  detail.setAttribute("href","http://localhost:3001/manager/store-detail-manager/"+number);
}

  