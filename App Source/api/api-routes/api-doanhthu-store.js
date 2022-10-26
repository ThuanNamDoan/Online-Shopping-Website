var express = require('express');
var router = express.Router();

const ctrl = require('../api-controller/data-doanhthu-store');

router.get('/month/:id', ctrl.getDataDoanhThu_Ngay);
router.get('/year/:id', ctrl.getDataDoanhThu_Thang);

module.exports = router;