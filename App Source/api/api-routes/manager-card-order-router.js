var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/manager-card-order-number.js');

router.get('/', ctrl.getNumOrder);

module.exports = router;