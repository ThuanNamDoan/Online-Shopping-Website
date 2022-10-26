let store = require('../../models/store');

function getStore(req, res)
{ 
    store.store.then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});

}

module.exports = {getStore };