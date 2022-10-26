let BanChayStore = require('../../models/banchay-store');

function getBanChay(req, res)
{ 
    let id = req.params.id;
    BanChayStore.getBanChay(id).then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
}

function getBanChay_Month(req, res)
{
    let id = req.params.id;
    BanChayStore.getBanChay_Month(id).then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
}

function getBanChay_Year(req, res)
{
    let id = req.params.id;
    BanChayStore.getBanChay_Year(id).then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
}

function getBanChay_Day(req, res)
{
    let id = req.params.id;
    BanChayStore.getBanChay_Day(id).then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
}

module.exports = {getBanChay, getBanChay_Month, getBanChay_Year, getBanChay_Day};