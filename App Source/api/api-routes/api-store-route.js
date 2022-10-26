var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/data-Each-store');

router.get('/:id', ctrl.getEachStore);

module.exports = router;