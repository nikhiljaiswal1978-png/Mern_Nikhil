const express = require('express');
const connectMongo = require('./db/db_config');
const routes = require('./routes/musicRoute');
const cors = require('cors');
connectMongo()
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use('/music',routes)
app.listen(4000,()=>{
    console.log("server is running");
    
})