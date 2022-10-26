var needle = require('needle');

const getDetail = (req, res, next) => {
    let id = req.query.id;
    
    //stored
    let url = `http://localhost:3001/api/detail?id=${id}`;
    
    needle('get', url)
    .then(function(resp) {

        let details = JSON.parse(resp.body);
        res.render('./detail/index', {details: details});
    })
    .catch(function(err) {
        console.log("error!");
    });
}

module.exports = {
    getDetail
}