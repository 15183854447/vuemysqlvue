var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var swaggerUi = require('swagger-ui-express');
var swaggerJSDoc = require('swagger-jsdoc');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//配置 swaggerJSDoc

const options = {
    definition: {
        // swagger 采用的 openapi 版本 不用改
        openapi: '3.0.0',
        // swagger 页面基本信息 自由发挥
        info: {
            title: '豆瓣电影api',
            description: '更多详情，查看      [https://github.com/15183854447/vuemysqlvue](https://github.com/15183854447/vuemysqlvue)',
            version: '1.0.0',
        },
        basePath: '',
    },
    // 重点，指定 swagger-jsdoc 去哪个路由下收集 swagger 注释
    apis: [path.join(__dirname, '/routes/*.js')]
};

const swaggerSpec = swaggerJSDoc(options);

// 开放 swagger 相关接口，
app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

// 使用 swaggerSpec 生成 swagger 文档页面，并开放在指定路由
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen('9528', function (err) {
    if (err) {
        console.log('9528端口、服务器启动失败');
        return;
    }
    console.log('9528端口、服务器启动成功')
});

module.exports = app;
