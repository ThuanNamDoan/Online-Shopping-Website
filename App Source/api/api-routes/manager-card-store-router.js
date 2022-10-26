var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/manager-card-store-number');

router.get('/', ctrl.getNumStore);

module.exports = router;