const mongoose = require('mongoose')
const md5 = require('md5');
const  userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
       type: String,
       required: true, 
    },
    state: {
        type: Number,
        default: 0
    }
})
const User = mongoose.model('User', userSchema)


User.create({                             //第一次启动完成后需要注释此段代码
    username: 'zhangsan',                 //第一次启动完成后需要注释此段代码
    email: 'zhangsan@qq.com',             //第一次启动完成后需要注释此段代码
    password: md5('123456'),              //第一次启动完成后需要注释此段代码
    role: 'admin',                        //第一次启动完成后需要注释此段代码
    state: 0                              //第一次启动完成后需要注释此段代码
}).then(()=>{console.log('用户创建成功')}) //第一次启动完成后需要注释此段代码
.catch(()=>{console.log('用户创建失败')})  //第一次启动完成后需要注释此段代码


module.exports = {
    User
}