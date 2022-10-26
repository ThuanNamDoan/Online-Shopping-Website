let model = require('../../models/system-manager');

function getNumUser(req, res)
{
    let storeNumberData = req.query.revenue;

    console.log('**********************' + storeNumberData);

    model.queryUserNumber().then((data)=>{
        console.log('************************* User number: ' + data);
        res.json(data); //quang
    })
    .catch(err => {res.json(err)});
    
}

module.exports = { getNumUser };