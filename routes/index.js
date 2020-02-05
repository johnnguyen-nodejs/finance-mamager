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
        res.render('index', { title: "Tuan | Home "});
    });

    router.get('/login', (req, res)=> {
        res.render('auth/login', { title: "Tuan | Login "});
    });
    router.post('/login', (req, res)=> {
        res.render('auth/login', { title: "Tuan | Login "});
    });

    router.get('/register', (req, res)=> {
        res.render('auth/register', { title: "Tuan | Register "});
    });
    router.post('/register', async (req, res)=> {
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
        res.redirect('/login');
    });
    router.post('/verify', async (req, res)=> {
        
        await newAssets.save();
        res.redirect('back');
    });


    router.get('/*', function(req, res){
        res.redirect("/");
      });
    app.use("/", router);
};
module.exports = initRouter;
