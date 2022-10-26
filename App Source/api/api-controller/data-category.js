let category = require('../../models/category');

function getCategory(req, res)
{
    let id = req.query.id;
    let count = req.query.count;
    

    if (count == null || count == undefined){
        count = 6;
    }

    category.getCategory(id, count).then((data)=>{
        res.json(data); //quang
    })
    .catch(err => {res.json(err)});
    
}

function getAllProducts(req, res){
    category.getAllProducts().then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
}

module.exports = {getCategory, getAllProducts };