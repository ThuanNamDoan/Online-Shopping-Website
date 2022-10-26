var express = require('express');
var router = express.Router();

const ctrl = require('../controller/detail.js');

router.get('/', ctrl.getDetail);

module.exports = router;