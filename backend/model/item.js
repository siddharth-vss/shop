// let express = require('express');
let mongoose = require('mongoose');


mongoose.connect("mongodb+srv://sparrow:2056King*@cluster0.rxzfnrt.mongodb.net/sparrow?retryWrites=true&w=majority");




let master = mongoose.Schema({
    Item: {
        type: String,
        required: true
    },
    Price:{
       type:Number,
       required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

let Punji = mongoose.model('item',master);

module.exports = Punji;