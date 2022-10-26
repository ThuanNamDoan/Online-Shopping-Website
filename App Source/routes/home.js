var express = require('express');
var router = express.Router();

const ctrl = require('../controller/home.js');

router.get('/', ctrl.getHomePage);
router.post('/', ctrl.InsertUser);

module.exports = router;