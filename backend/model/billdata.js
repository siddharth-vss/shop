// let express = require('express');
let mongoose = require('mongoose');





let logIn = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    Zip: {
        type: String,
        required: true
    },
    Item: {
        type: Array,
        required: true
    },
    quantity: {
        type: Array,
        required: true
    },
    Price: {
        type: Array,
        required: true
    },
    Total: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

let Shop = mongoose.model('customer',logIn);

module.exports = Shop;