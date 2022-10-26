var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/data-totnhat-store');

router.get('/day/:id', ctrl.getTotNhat_Day);
router.get('/month/:id', ctrl.getTotNhat_Month);
router.get('/year/:id', ctrl.getTotNhat_Year);
router.get('/all/:id', ctrl.getTotNhat_All);

module.exports = router;