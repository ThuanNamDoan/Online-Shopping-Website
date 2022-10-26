var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/manager-card-product-number');

router.get('/', ctrl.getNumProduct);

module.exports = router;