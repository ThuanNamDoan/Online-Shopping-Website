var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/data-account');

router.get('/:name', ctrl.getDataDH);

module.exports = router;