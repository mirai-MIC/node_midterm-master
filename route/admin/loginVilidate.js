const md5 = require('md5');
const { User } = require('../../model/user');

module.exports = async (req,res)=>{
    const user = req.body
    //服务器端验证客户端传递的数据
    if(user.email.trim().length == 0 || user.password.trim().length == 0){
        res.status(400).render('admin/error', {
            msg:'请输入邮箱或密码'
        })
        return
    }else{
        const result = await User.findOne({email:user.email})
        if(!result){
            res.status(400).render('admin/error', {
                msg:'请输入正确邮箱或密码'
            })
            return
        }
        if(md5(user.password) !== result.password){
            res.status(400).render('admin/error',{
                msg:'请输入正确邮箱或密码'
            })
            return
        }
        //如果代码到了这里，说明密码比对正确了
        //如果登陆成功，在跳转到user页面之前。我们还需要做几件事
        //把用户的姓名保存在req.session中
        //动态添加一个属性。username保存result.uesult.username
        req.session.username = result.username
        //需要把当前用户登陆成功后的用户名，保存在一个公共的位置
        //供header.htmk使用
        //在express框架，我们会把公共模块需要用到的数据库放在app.locals对象中
        //app  服务器模块比较特殊，不用导出，不用导入就可以在其他模块使用
        req.app.locals.username = result.username


        res.redirect('/admin/user')
    }
    // res.send(req.body)
}