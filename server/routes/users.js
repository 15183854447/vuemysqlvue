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

/**
 *@swagger
 * /users/info:
 *   get:
 *     tags:
 *     - 用户
 *     summary: 用户查询
 */
router.get('/info/:id', function (req, res, next) {
    console.log(req.params.id);//获取参数
    res.json({'name': "张三", "age": 28})
    // db.query('select * from users', [], function (results, fields) {
    //     res.send(results)
    // })
});
/**
 *@swagger
 *  /users/login:
 *   get:
 *    tags:
 *    - 用户
 *    summary: 用户登录
 */
router.get('/login', function (req, res, next) {
    console.log(req.query);
    res.send(req.query)
});
/**
 *@swagger
 *  /users/login/a:
 *   post:
 *    tags:
 *    - 用户
 *    summary: 用户登录
 *    description: 用户登录的接口
 *    parameters:
 *      - name: body
 *        in: body
 *        require: true
 *        schema:
 *          type: object
 *          properties:
 *            id:
 *              type: integer
 *            username:
 *              type: string
 *    responses:
 *       404:
 *         description: 失败
 */
router.post('/login/a', function (req, res, next) {
    console.log(req.body);
    res.send(req.body)
});
/**
 *@swagger
 *  /users/zhangsan/a:
 *   post:
 *    tags:
 *    - 用户
 *    summary: 用户登录
 *    description: 用户登录的接口
 *    consumes:
 *      - application/json
 *      - application/xml
 *    parameters:
 *      - name: body
 *        in: body
 *        description: 传递参数说明
 *        require: true
 *        schema:
 *          type: object
 *          properties:
 *            id:
 *              type: integer
 *            username:
 *              type: string
 *            store:
 *              type: array
 *              items:
 *                properties:
 *                  first:
 *                    type: string
 *                  sencond:
 *                    type: string
 *    responses:
 *       404:
 *         description: 失败
 */
router.post('/zhangsan/a', function (req, res, next) {
    console.log(req.body);
    res.send(req.body)
});
module.exports = router;
