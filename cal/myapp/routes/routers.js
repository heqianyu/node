// routers.js
var express = require('express');
var router = express.Router();
var Caluc = require('../models/calcu.js');

//获取计算器的布局文件
router.get('/', function (req, res, next) {
    res.render('index', {title: '计算器'});
});

//异步获取计算结果
router.post('/calu', function (req, res, next) {
    var f = req.body.vf, s = req.body.vs, t = req.body.vt;
    var c = new Caluc();
    c.plus(s, f, t, function (err, data) {
        res.send(200, data);
    })
});


module.exports = router;
