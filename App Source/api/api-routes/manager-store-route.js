var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/data-manager-store');

router.get('/', ctrl.getStore);

module.exports = router;