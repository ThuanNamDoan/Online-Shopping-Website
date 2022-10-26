let store = require('../../models/manager_store');

function getStore(req, res)
{ 
    store.CuaHang.then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});

}

module.exports = {getStore };