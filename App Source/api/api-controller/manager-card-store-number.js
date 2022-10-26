let model = require('../../models/system-manager');

function getNumStore(req, res)
{
    let storeNumberData = req.query.revenue;

    console.log('**********************' + storeNumberData);

    model.queryStoreNumber().then((data)=>{
        console.log('************************* data' + data);
        res.json(data); //quang
    })
    .catch(err => {res.json(err)});
    
}

module.exports = { getNumStore };