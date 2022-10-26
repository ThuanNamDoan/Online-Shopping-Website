var express = require('express');
var router = express.Router();

const ctrl = require('../controller/products.js');

router.get('/', ctrl.getProducts);
router.get('/search', ctrl.getSearchProducts);

module.exports = router;