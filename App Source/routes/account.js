var express = require('express');
var router = express.Router();

const ctrl = require('../controller/account.js');

router.get('/all/:name', ctrl.getAccount_All);
router.get('/cxn/:name', ctrl.getAccount_cxn);
router.get('/clh/:name', ctrl.getAccount_clh);
router.get('/dg/:name', ctrl.getAccount_dg);
router.get('/gtc/:name', ctrl.getAccount_gtc);
router.get('/dh/:name', ctrl.getAccount_dh);

module.exports = router;