// let express = require('express');
let mongoose = require('mongoose');





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

