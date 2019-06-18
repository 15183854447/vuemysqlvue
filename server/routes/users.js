var express = require('express');
var router = express.Router();

var db = require('../db');

/**
 * @swagger
 * /logger/apps:
 *   get:
 *     summary: 获取有日志记录的应用
 *     description: 获取有日志记录的应用
 *     tags:
 *       - 柜子
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/apps', async (req, res, next) => {
    try {
        const result = ['自定义字段'];

        return res.send({result});
    } catch (err) {
        next(err);
    }
});

/**
 *@swagger
 * /users/info:
 *   get:
 *     tags:
 *     - 用户
 *     summary: 用户登录
 */
router.get('/info', function (req, res, next) {
    console.log(req.query)
    console.log(req.body)
    res.json({'name':"张三","age":28})
    // db.query('select * from users', [], function (results, fields) {
    //     res.send(results)
    // })
});

module.exports = router;
