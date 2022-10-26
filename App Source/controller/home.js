var homeModel = require('../models/home');

const getHomePage = (req, res, next) => {
    res.render('./home/index');
}

const InsertUser = (req, res) => {
    let info = {...req.body};
    
    homeModel.InsertUser(info.MaKH, info.name, info.email, info.phone, info.sex, info.adress, info.ward, info.district, info.username, info.password);
}

module.exports = {
    // getHome, 
    getHomePage,
    InsertUser
}