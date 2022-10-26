var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/discount');

router.get('/', ctrl.getDiscount);

module.exports = router;