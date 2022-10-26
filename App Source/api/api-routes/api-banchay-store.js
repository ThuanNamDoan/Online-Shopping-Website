var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/data-banchay-store');

router.get('/all/:id', ctrl.getBanChay);
router.get('/day/:id', ctrl.getBanChay_Day);
router.get('/month/:id', ctrl.getBanChay_Month);
router.get('/year/:id', ctrl.getBanChay_Year);

module.exports = router;