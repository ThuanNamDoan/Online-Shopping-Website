let purcharse = require('../../models/account');


async function getDataDH(req, res)
{
    let name = req.params.name;
    let key = name.split("-");
    
    switch (key[0]){
        case "all":
            purcharse.queryDH_All(key[1]).then((data)=>{
                res.json(data); //quang
            })
            .catch(err => {res.json(err)});
            break;
        case "cxn":
            purcharse.queryDH_CXN(key[1]).then((data)=>{
                res.json(data); //quang
            })
            .catch(err => {res.json(err)});
            break;
        case "clh":
            purcharse.queryDH_CLH(key[1]).then((data)=>{
                res.json(data); //quang
            })
            .catch(err => {res.json(err)});
            break;
        case "dg":
            purcharse.queryDH_DG(key[1]).then((data)=>{
                res.json(data); //quang
            })
            .catch(err => {res.json(err)});
            break;
        case "gtc":
            purcharse.queryDH_GTC(key[1]).then((data)=>{
                res.json(data); //quang
            })
            .catch(err => {res.json(err)});
        case "dh":
            purcharse.queryDH_DH(key[1]).then((data)=>{
                res.json(data); //quang
            })
            .catch(err => {res.json(err)});
            break;
    }

 
}

module.exports = {getDataDH};

