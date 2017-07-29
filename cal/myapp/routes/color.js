// color.js
var express = require('express');
var router = express.Router();
var Coto = require('../models/color.js');


/* GET home page. */
//获取rgb布局文件
router.get('/color', function (req, res, next) {
    res.render('color', {title: 'rgb 转换器'});
});

//异步获取转换成rgb的结果
router.post('/torgb', function (req, res, next) {
    var s = req.body.vs;
    var c = new Coto();
    c.torgb(s, function (err, data) {
        res.send(data);
    })
});

//异步获取转成hex的结果
router.post('/tohex', function (req, res, next) {
    var r = req.body.r, g = req.body.g, b = req.body.b;
    var c = new Coto();
    c.tohex(r, g, b, function (err, data) {
        res.send(data);
    })
});

module.exports = router;