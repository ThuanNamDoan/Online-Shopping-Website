let homeModel = require('../../models/home');

function getAccountApi(req, res)
{
    let userName = req.query.username;
    let passWord = req.query.password;

    homeModel.queryAccount(userName, passWord).then((data)=>{
        res.json(data); //quang
    })
    .catch(err => {res.json(err)});
    
}

function getInfoUser(req, res)
{
    let id = req.query.id;

    homeModel.getInfoUser(id).then((data)=>{
        res.json(data); //quang
    })
    .catch(err => {res.json(err)});
}

module.exports = {
    getAccountApi, getInfoUser
};



