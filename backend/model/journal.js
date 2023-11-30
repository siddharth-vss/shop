let dotenv = require('dotenv');
let mongoose = require('mongoose');




dotenv.config()

mongoose.connect(process.env.DB);


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
    },timestamps: true,
})


let Entry = mongoose.model('Entry',Try);

module.exports = Entry;

