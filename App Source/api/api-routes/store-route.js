var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/store');

router.get('/', ctrl.getStore);

module.exports = router;