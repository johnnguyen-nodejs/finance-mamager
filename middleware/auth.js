var checkLogedIn = (req, res, next) => {
    var { user } = req.session;
    if(!user){
        return res.redirect("/login");
    };
    next();
};

var checkLogedOut = (req, res, next) => {
    var { user } = req.session;
    if(user){
        return res.redirect("/");
    };
    next();
};

module.exports = {
    checkLogedOut,
    checkLogedIn
}