module.exports = (req,res)=>{
    const {message} = req.query
    res.render('admin/user-add', {
        message
    });
}