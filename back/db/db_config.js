const mongoose = require('mongoose');
 const connectMongo=()=>{
    mongoose.connect('mongodb://localhost:27017/backend').then(()=>
    console.log("connected to db...")).catch((err)=>
        console.log(err)
        
    )
    
 }
 module.exports=connectMongo