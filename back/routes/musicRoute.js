const express = require('express');
const {addMusic,showMusic,showMusics,updateMusic,deleteMusic} = require('../controllers/musicController');
const routes=express.Router()
routes.post('/add',addMusic)
routes.get('/',showMusics)
routes.put('/:id',updateMusic)
routes.get('/music/:id',showMusic)
routes.delete('/:id',deleteMusic)
module.exports=routes
