var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/data-detail');

router.get('/', ctrl.getDetail);

module.exports = router;