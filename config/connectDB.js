const mongoose = require("mongoose");
const bluebird = require("bluebird");

/**
 * connect Mongodb
 */

let connectDB = ()=>{
    try {
        mongoose.promise = bluebird;
        let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
        return mongoose.connect(URI, { useUnifiedTopology: true,useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true });
    
    } catch (error) {
        console.log("connect DB Fail")
    }
};
module.exports = connectDB;