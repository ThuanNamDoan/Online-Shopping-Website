let model = require('../../models/system-manager');

function getNumOrder(req, res)
{
    let orderNumberData = req.query.revenue;

    console.log('**********************' + orderNumberData);

    model.queryOrderNumber().then((data)=>{
        console.log('************************* data' + data);
        res.json(data); //quang
    })
    .catch(err => {res.json(err)});
    
}

module.exports = { getNumOrder };