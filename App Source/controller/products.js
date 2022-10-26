var needle = require('needle');

const getProducts = (req, res, next) => {
    
    let id = req.query.id;
    let count = req.query.count;

    if (count == null || count == undefined){
        count = 6;
    }
    
    //stored
    let url = `http://localhost:3001/api/category?id=${id}&&count=${count}`;
    
    needle('get', url)
    .then(function(resp) {

        let list = JSON.parse(resp.body);
        let render = {
            products: list,
            id: id,
        }
        res.render('./products/index', {render: render});
    })
    .catch(function(err) {
        console.log("error!");
    });
}

const getSearchProducts = (req, res, next) => {
    
    let key = req.query.key;
    let count = req.query.count;

    if(count == 0 || count == null || undefined){
        count = 6
    }

    let numb = 0;

    if(key != null){
        key = key.toLowerCase();

        let url = `http://localhost:3001/api/category/all`;
        
        needle('get', url)
        .then(function(resp) {

            let list = JSON.parse(resp.body);
            let results = [];

            for (i = 0; i < list.length; i++){    
                if(numb < count){
                    if(list[i].TenSP != null && list[i].TenSP.toLowerCase().includes(key)){
                        results.push(list[i])
                        numb++;
                    }
                }
            }

            let render = {
                products: results,
                id: 0,
                key: key,
            }

            res.render('./products/index', {render: render});
        })
        .catch(function(err) {
            console.log("error!"+ err);
        });
    }
    else{
        let render = {
            products: [],
            id: 0,
            key: key,
        }
        res.render('./products/index', {render: render});
    }
}

module.exports = {
    getProducts, getSearchProducts
}