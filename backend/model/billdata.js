// let express = require('express');
let mongoose = require('mongoose');



mongoose.connect("mongodb+srv://sparrow:2056King*@cluster0.rxzfnrt.mongodb.net/sparrow?retryWrites=true&w=majority");



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
    billern: {
        type: String,
        required: true
    },
    biller: {
        type: String,
        // required: true
    },
    Payment: {
        type: String,
        // required: true
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