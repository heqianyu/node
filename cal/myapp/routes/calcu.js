// calcu.js  我是按照之前select的index值来分配的运算符，其实也可将color与js都放在user里，没有选择是因为原本就考虑实现不同的路由分配。
var express = require('express');
var router = express.Router();
var calcu = require('../models/calcu.js');

//获取计算器的布局文件
router.get('/calu', function (req, res, next) {
    res.render('calcu', {title: '计算器'});
});

//异步获取计算结果
router.post('/calu', function (req, res, next) {
    var f = req.body.vf, s = req.body.vs, t = req.body.vt;
    var c = new calcu();
    c.plus(s, f, t, function (err, data) {
        res.send(200, data);
    })
});


module.exports = router;