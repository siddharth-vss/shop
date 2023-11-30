let dotenv = require('dotenv');
let mongoose = require('mongoose');

dotenv.config()

mongoose.connect(process.env.DB);


let logIn = mongoose.Schema({
   
    name:String,
    email:String,
    password:String,
    mono:String,
    address:String,
    timestamps: true,
   
})

let Ulog = mongoose.model('user',logIn);

module.exports = Ulog;