let revenue = require('../../models/system-manager');

function getRevenue(req, res)
{
    let revenueData = req.query.revenue;

    console.log('**********************' + revenueData);

    revenue.queryRevenueMonth().then((data)=>{
        console.log('************************* data' + data);
        res.json(data); //quang
    })
    .catch(err => {res.json(err)});
    
}

module.exports = { getRevenue };