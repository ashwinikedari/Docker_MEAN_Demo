
const mongoose = require("mongoose"),

Schema = mongoose.Schema;

var mySchema = new Schema({
    photos:[
       { url:String}
    ]
},{collection:"images"});

module.exports = mongoose.model('images', mySchema);