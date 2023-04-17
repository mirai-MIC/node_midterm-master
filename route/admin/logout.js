module.exports = (req,res)=>{
    //切断客户端和服务器的联系
    //删除服务器端session数据
    req.session.destroy(function(){
        //删除cookie数据
        res.clearCookie('connect.sid')
        //跳转回登录页
        res.redirect('/admin/login')
    })
}