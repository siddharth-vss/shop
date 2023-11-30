let dotenv = require('dotenv');
let mongoose = require('mongoose');


dotenv.config()

mongoose.connect(process.env.DB);


let logIn = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile_number: {
        type: Number,
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
        type: Number,
        required: true
    },
    biller_num: {
        type: Number,
        // required: true
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
      
    },
    date: {
        type: Date,
        default: Date.now
    },
     timestamps: true, })



let Shop = mongoose.model('customer',logIn);

module.exports = Shop;