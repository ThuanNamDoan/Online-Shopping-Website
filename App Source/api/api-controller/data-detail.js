var detail = require('../../models/detail');

function getDetail(req, res)
{
    let id = req.query.id;
    
    detail.getDetail(id).then((data)=>{
        res.json(data);
    })
    .catch(err => {res.json(err)});
    
}

module.exports = {getDetail };