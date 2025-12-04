const mongoose = require('mongoose');
const modelSchema=new mongoose.Schema({
    album :String,
    artist:String,
    year:Number,
    genre:String,
    image:String
},{timestamps:true})
const musicModel=mongoose.model('music',modelSchema)
module.exports=musicModel