
/* Sự kiện auto height của textarea */
function autoHeightTextArea(){
    var x = document.querySelector('.side-item-main textarea');
    x.style.height ='auto';
    x.style.height = x.scrollHeight+'px';
}


/* Sự kiện nút Thay đổi địa chỉ */
function buttonChange() {
    var btnChange = document.querySelector('#btn-change');
    var text = document.querySelector('#text-adress');

    btnChange.addEventListener('click', function() {
        if (btnChange.innerHTML == "Thay đổi") {
            text.style.border = '0.11em solid #737373';
            text.style.color = 'black';
            text.removeAttribute("readonly");
            btnChange.innerHTML = "Lưu";
        } else {
            text.style.border = 'none';
            text.setAttribute("readonly", "");
            text.style.color = '#808080';
            btnChange.innerHTML = "Thay đổi";
            autoHeightTextArea();
        }
    });  
}

function moreInfo() {
    var btn = document.querySelector('#btn-moreinfo');

    var btnContainer = document.querySelector('#btn-moreinfo-container');

    btnContainer.addEventListener('click', function() {
        var itemList = document.querySelectorAll('.item-container');
        var sideItemListContainer = document.querySelector('.side-list-item-container');
        var icon = document.querySelector('#icon-moreinfo');

        if (btn.innerHTML == "Xem thông tin") {
            btn.innerHTML = "Thu gọn";          
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">' + 
            '<path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"' + "/>" + 
            "</svg>";

            // thêm title
            let titleSpan = document.createElement("span");
            //titleSpan.appendChild(document.createTextNode("Danh sách sản phẩm"));
            titleSpan.style.cssText += 'font-size: 13px;  color: #737373;';
            sideItemListContainer.appendChild(titleSpan);;
            for (i = 0; i < itemList.length; i++) {

                // lấy sản phẩm
                let itemName = itemList[i].querySelector('.item-name').innerHTML;
                let itemAmount = itemList[i].querySelector('.item-amount').innerHTML;
                let itemPrice = itemList[i].querySelector('.item-price').innerHTML;

                // item amount
                let itemAmountSpan = document.createElement("div");
                itemAmountSpan.appendChild(document.createTextNode(itemAmount + " x"));
                itemAmountSpan.classList.add("side-item-field");
                itemAmountSpan.classList.add("col-md-2");

                // item name
                let itemNameSpan = document.createElement("div");
                itemNameSpan.appendChild(document.createTextNode(itemName));
                itemNameSpan.classList.add("side-item-name");
                itemNameSpan.classList.add("side-item-field");
                itemNameSpan.classList.add("col-md-6");
                
                // item price
                let itemPriceSpan = document.createElement("span");
                itemPriceSpan.appendChild(document.createTextNode(itemPrice));
                itemPriceSpan.classList.add("side-item-field");
                itemPriceSpan.classList.add("col-md-4");
                itemPriceSpan.style.cssText += 'text-align: end';

                // tạo item container
                let itemContainer = document.createElement("div");
                itemContainer.classList.add("row");
                itemContainer.style.cssText += 'padding: 0 3% 0 0; margin: 0;';

                // thêm item vào container
                itemContainer.appendChild(itemAmountSpan);
                itemContainer.appendChild(itemNameSpan);
                itemContainer.appendChild(itemPriceSpan);

                // thêm item vào container list   
                sideItemListContainer.appendChild(itemContainer);
            }
        }
        else {
            btn.innerHTML = "Xem thông tin";
            sideItemListContainer.innerHTML = "";

            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">' +
            '<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"' + '/>' +
            '</svg>';
        }
    });
}





//autoHeightTextArea();
//buttonChange();

moreInfo();

