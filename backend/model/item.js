let dotenv = require('dotenv');
let mongoose = require('mongoose');

dotenv.config()

mongoose.connect(process.env.DB);


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
    },timestamps: true
})

let Punji = mongoose.model('item',master);

module.exports = Punji;