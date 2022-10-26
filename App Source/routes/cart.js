var express = require('express');
var router = express.Router();

const ctrl = require('../controller/cart.js');

router.get('/', ctrl.getCart);

module.exports = router;