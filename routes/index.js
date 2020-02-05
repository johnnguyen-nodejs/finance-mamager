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
    router.post('/verify', async (req, res)=> {
        var newAssets = new User({
            username: req.body.username,
            assets: req.body.assets,
            job: req.body.job
        });
        await newAssets.save();
        res.redirect('back');
    });


    router.get('/*', function(req, res){
        res.redirect("/");
      });
    app.use("/", router);
};
module.exports = initRouter;
