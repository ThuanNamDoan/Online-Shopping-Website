var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/manager-card-user-number');

router.get('/', ctrl.getNumUser);

module.exports = router;