// let express = require('express');
let mongoose = require('mongoose');



let logIn = mongoose.Schema({
   
    name:String,
    email:String,
    password:String,
    mono:String,
    address:String,
    _id: {
        type: Date,
        default: Date.now
    }
   
})

let Ulog = mongoose.model('user',logIn);

module.exports = Ulog;