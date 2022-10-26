var needle = require('needle');

const getSystemManager = (req, res, next) => {
    res.render('./manager/system-manager');
}


const getStoresManager = (req, res, next) => {

    let url = `http://localhost:3001/api/manager`;
    
    needle('get', url)
    .then(function(resp) {
        let list = JSON.parse(resp.body);
        res.render('./manager/stores-manager', {store: list});
    })
    .catch(function(err) {
        console.log("error!");
    });
    // res.render('./manager/stores-manager');
}

const getStoreDetailManager = (req, res, next) => {

    let id = req.params.id;
    let url = `http://localhost:3001/api/store/${id}`;

    needle('get', url)
    .then(function(resp) {
        let list = JSON.parse(resp.body);
        res.render('./manager/store-detail-manager', {store: list});
    })
    .catch(function(err) {
        console.log("error!");
    });
    // res.render('./manager/store-detail-manager');
}

const getLoginManager = (req, res, next) => {
    res.render('./manager/login-manager');
}


module.exports = {
    getSystemManager,  getStoresManager, getStoreDetailManager, getLoginManager
}

