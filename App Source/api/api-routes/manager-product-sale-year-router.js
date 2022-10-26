var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/manager-product-sale-year');

router.get('/', ctrl.getProductSale);

module.exports = router;