// let express = require('express');
let mongoose = require('mongoose');




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