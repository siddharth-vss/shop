// let express = require('express');
let mongoose = require('mongoose');


mongoose.connect("mongodb+srv://sparrow:2056King*@cluster0.rxzfnrt.mongodb.net/sparrow?retryWrites=true&w=majority");


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