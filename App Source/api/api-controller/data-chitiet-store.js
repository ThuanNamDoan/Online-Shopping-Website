let eachStore = require('../../models/chitiet-store');

function getEachStore(req, res)
{ 
    let id = req.params.id;

    eachStore.queryEachStore(id).then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
}

module.exports = {getEachStore };