var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/data-home');

router.get('/', ctrl.getAccountApi);
router.get('/info', ctrl.getInfoUser);

module.exports = router;