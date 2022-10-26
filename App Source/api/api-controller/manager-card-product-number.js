let model = require('../../models/system-manager');

function getNumProduct(req, res)
{
    let productNumberData = req.query.revenue;

    console.log('**********************' + productNumberData);

    model.queryProductNumber().then((data)=>{
        console.log('************************* data' + data);
        res.json(data); //quang
    })
    .catch(err => {res.json(err)});
    
}

module.exports = { getNumProduct };