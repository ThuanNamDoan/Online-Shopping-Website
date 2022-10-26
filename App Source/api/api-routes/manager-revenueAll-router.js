var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/manager-revenue-all');

router.get('/', ctrl.getRevenue);

module.exports = router;