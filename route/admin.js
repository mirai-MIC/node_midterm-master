const express = require('express');
const admin = express.Router();
//-------------get----------------
admin.get('/', (req,res)=>{
    res.send('管理首页');
})
admin.get('/login', require('./admin/login'))
admin.get('/user', require('./admin/user'))
admin.get('/user-add', require('./admin/user-add'))
admin.get('/logout', require('./admin/logout'))
admin.get('/success',require('./admin/success'));

//----------------post-------------------
admin.post('/login', require('./admin/loginVilidate'))
admin.post('/user-add', require('./admin/user-add-create'))
module.exports=admin;