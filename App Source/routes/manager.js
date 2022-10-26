var express = require('express');
var router = express.Router();

const ctrl = require('../controller/manager.js');

router.get('/system-manager', ctrl.getSystemManager);

router.get('/stores-manager/', ctrl.getStoresManager);

router.get('/store-detail-manager/:id', ctrl.getStoreDetailManager);

router.get('/login-manager', ctrl.getLoginManager);

module.exports = router;