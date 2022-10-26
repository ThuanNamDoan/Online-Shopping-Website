let TotNhatStore = require('../../models/totnhat-store');

function getTotNhat_Day(req, res)
{ 
    let id = req.params.id;
    TotNhatStore.TotNhat_Day(id).then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
}

function getTotNhat_Month(req, res)
{ 
    let id = req.params.id;
    TotNhatStore.TotNhat_Month(id).then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
}

function getTotNhat_Year(req, res)
{ 
    let id = req.params.id;
    TotNhatStore.TotNhat_Year(id).then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
}

function getTotNhat_All(req, res)
{ 
    let id = req.params.id;
    TotNhatStore.TotNhat_All(id).then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
}

module.exports = {getTotNhat_Day, getTotNhat_Month, getTotNhat_Year, getTotNhat_All};