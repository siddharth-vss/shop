// let express = require('express');
let mongoose = require('mongoose');


mongoose.connect("mongodb+srv://sparrow:2056King*@cluster0.rxzfnrt.mongodb.net/sparrow?retryWrites=true&w=majority");




let Try = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Textarea: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


let Entry = mongoose.model('Entry',Try);

module.exports = Entry;

