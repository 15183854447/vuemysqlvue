var express = require('express');
var router = express.Router();

var db = require('../db');


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
 */
router.get('/list.html/:id', function (req, res, next) {
    var id = req.params.id;
    db.query('select * from users WHERE id=?', [id], function (results, fields) {
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
 *         schema:
 *           type: object
 *           properties:
 *             fullname:
 *               type: string
 *             username:
 *               type: string
 *     responses:
 *       200:
 *         description: 【成功】 返回 world
 */
router.post('/jz.html', function (req, res, next) {
    var username = req.body.username;
    var fullname = req.body.fullname;
    console.log(username, fullname);
    var sql = "select * from users WHERE username like ? and fullname like ?";
    // sql += " where var_name like ‘%"+data.varName+"%‘";
    db.query(sql, ['%' + username + '%', '%' + fullname + '%'], function (results, fields) {
        res.send(results)
    })
});


module.exports = router;
