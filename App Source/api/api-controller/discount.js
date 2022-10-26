let discount = require('../../models/discount');

function getDiscount(req, res)
{ 
    discount.discount.then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});

}

module.exports = {getDiscount };