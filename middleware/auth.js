var checkLogedIn = (req, res, next) => {
    var sess = req.session;
    if(!sess.user){
        return res.redirect("/login");
    };
    next();
};

var checkLogedOut = (req, res, next) => {
    var sess = req.session;
    if(sess.user){
        return res.redirect("/");
    };
    next();
};

module.exports = {
    checkLogedOut,
    checkLogedIn
}