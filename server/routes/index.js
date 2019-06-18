var express = require('express');
var router = express.Router();

var db = require('../db');
/**
 * @swagger
 * definitions:
 *   Puppy:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */

/**
 * @swagger
 * /list.html/{id}:
 *   get:
 *     tags:
 *       - 添加
 *     description: 添加用户
 *     summary: 查询用户列表中名字带有s的
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: 用户id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
router.get('/list.html/:id', function (req, res, next) {
    db.query('select * from users', [], function (results, fields) {
        res.send(results)
    })
});
/**
 * @swagger
 * /jz.html:
 *   post:
 *     tags:
 *       - 用户
 *     summary: 查询用户列表中名字带有s的
 *     description: 所有用户信息或者用户的集合信息
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: puppy
 *         description: object
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: 【成功】 返回 world
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
router.post('/jz.html', function (req, res, next) {
    var sql = "select * from users WHERE username like ?";
    // sql += " where var_name like ‘%"+data.varName+"%‘";
    db.query(sql, ['%s%'], function (results, fields) {
        res.send(results)
    })
});


module.exports = router;
