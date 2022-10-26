var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/manager-order-year');

router.get('/', ctrl.getNumberOrderChart);

module.exports = router;