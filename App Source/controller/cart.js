/*
const getCart = (req, res, next) => {
    res.render('./cart/index');
}*/

var needle = require('needle');

const getCart = (req, res) => {
    let url = `http://localhost:3001/api/discount`;
    
    needle('get', url)
    .then(function(resp) {
        let list = JSON.parse(resp.body);

        for (i = 0; i < list.length; i++) {
            list[i].NgayKT = list[i].NgayKT.substr(0, 10);
        }

        res.render('./cart/index', {discount: list});
    })
    .catch(function(err) {
        console.log("error!");
    });
}

module.exports = {
    getCart, 
}