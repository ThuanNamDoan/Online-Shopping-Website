var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/manager-revenue-month');

router.get('/', ctrl.getRevenue);

module.exports = router;