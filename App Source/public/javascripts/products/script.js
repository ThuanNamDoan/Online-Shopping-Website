function SeenMore(){
    let page = document.getElementById('page').innerHTML;
    let key = document.getElementById('key').innerHTML;
    let infoPage = JSON.parse(localStorage.getItem('InfoPage'));
    
    if (infoPage == null || infoPage == undefined){
        infoPage = {}
        infoPage.page = page;
        infoPage.count = 12;
        infoPage.key = key;
    }
    else{
        if (page == 0){
            infoPage.page = 0;

            if (infoPage.key == key){
                infoPage.count += 6
            }
            else{
                infoPage.key = key;
                infoPage.count = 6
            }
        }
        else{
            if(infoPage.page == page)
                infoPage.count += 6
            else{
                infoPage.page = page;
                infoPage.count = 12;
            }
        }
        
    }
    
    localStorage.setItem("InfoPage", JSON.stringify(infoPage));

    if(infoPage.page != 0){

        window.location = `http://localhost:3001/products?id=${infoPage.page}&&count=${infoPage.count}`;
        
    }
    else{
        
        window.location = `http://localhost:3001/products/search?key=${key}&&count=${infoPage.count}`;
    }

}