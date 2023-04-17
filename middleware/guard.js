//用来判断用户登录状态
module.exports = (req,res,next)=>{
    // 判断用户访问的是否是/login,同时判断是否存在cookie
    if(req.url != '/login' && !req.session.username){
        // 跳转到登录页
        res.redirect('/admin/login')
        return
    }
    //判断通过则放行
    next()
}