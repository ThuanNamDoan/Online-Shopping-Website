var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/data-category');

router.get('/', ctrl.getCategory);
router.get('/all', ctrl.getAllProducts);

module.exports = router;