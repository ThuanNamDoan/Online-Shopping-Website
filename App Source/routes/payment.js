var express = require('express');
var router = express.Router();

const ctrl = require('../controller/payment.js');

router.get('/', ctrl.getPayment);
router.post('/', ctrl.postOrder);

module.exports = router;