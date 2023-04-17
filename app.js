const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
require('./model/connect.js')
const user = require('./model/user.js')//第一次启动完成后需要注释此段代码
const session = require('express-session')
const home = require('./route/home');
const admin = require('./route/admin');
const { prototype } = require('events');
const app = express();
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret:'keyboard cat',
    saveUninitialized:false,
    cookie:{
        maxAge:24*60*60*1000
    }
}))
app.use('/admin', require('./middleware/guard.js'))
app.use('/home', home);
app.use('/admin', admin);
app.listen(8080)
console.log('服务器已经启动');
console.log('请访问地址http://localhost:8080/');
