const express = require('express');
const User = require('./../models/User');
const auth = require('./../middleware/auth');
let router = express.Router();
/**
 * init routes 
 */
let initRouter = (app)=>{
    // page route
    router.get('/', (req, res)=> {
        var sess = req.session;
        res.render('index', { 
            title: "Tuan | Home ",
            user: sess.user
        });
    });


    // auth
    router.get('/login',auth.checkLogedOut, (req, res)=> {
        res.render('auth/login', { 
            title: "Tuan | Login ",
            user: req.session.user
        });
    });
    router.post('/login',auth.checkLogedOut, async (req, res)=> {
        var { email, password } = req.body;
        var checkUser = await User.findOne({ 'email': email }).exec();
        if(!checkUser){
            console.log("User Invalid");
            return res.redirect("/register");
        }
        if(password != checkUser.password){
            console.log("User Invalid");
            return res.redirect('/login');
        }
        var sess = req.session;
        sess.user = checkUser
        console.log(sess.user)
        return res.redirect('/');
    });
    

    router.get('/register',auth.checkLogedOut, (req, res)=> {
        res.render('auth/register', { 
            title: "Tuan | Register ",
            user: req.session.user
        });
    });
    router.post('/register',auth.checkLogedOut, async (req, res)=> {
        var { email, password } = req.body;
        var checkUser = await User.findOne({ 'email': email }).exec();
        if(checkUser){
            console.log("User Invalid");
            res.redirect("/register");
        }
        var newUser = new User({
            email: email,
            password: password
        });
        await newUser.save();
        return res.redirect('/login');
    });
    router.get('/logout',auth.checkLogedIn,function(req,res){    
        req.session.destroy(function(err){  
            if(err){  
                console.log(err);  
            }  
            else  
            {  
                res.redirect('/login');  
            }  
        });  
    
    });


    // user service
    router.post('/verify',auth.checkLogedIn, async (req, res)=> {
        var { username, assets, job} = req.body;
        await User.findOneAndUpdate({'email': req.session.user.email},{
            'job': job,
            'username': username,
            'assets.total': assets,
            'assets.ltss.total': assets*0.1,
            'assets.edu.total': assets*0.1,
            'assets.nec.total': assets*0.5,
            'assets.play.total': assets*0.1,
            'assets.ffa.total': assets*0.2
        })
        
        var currentUser = await User.findOne({'email': req.session.user.email}).select('-password');
        req.session.user = currentUser;
        res.redirect('back');
    });


    router.get('/*', function(req, res){
        res.redirect("/");
      });
    app.use("/", router);
};
module.exports = initRouter;
