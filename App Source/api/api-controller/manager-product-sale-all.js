let model = require('../../models/system-manager');

function getProductSale(req, res)
{
    let revenueData = req.query.revenue;

    console.log('**********************' + revenueData);

    model.queryProductSaleAll().then((data)=>{
        console.log('************************* data' + data);
        res.json(data); //quang
    })
    .catch(err => {res.json(err)});
    
}

module.exports = { getProductSale };