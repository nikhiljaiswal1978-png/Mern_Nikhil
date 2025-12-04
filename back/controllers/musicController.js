const musicModel = require('../models/musicModel');
exports.addMusic=async(req,res)=>{
    const new_music=new musicModel(req.body)
    const result=await new_music.save()
    res.status(200).json(result)
}
exports.showMusics=async(req,res)=>{
    const musics= await musicModel.find()
    if (musics !=null) {
        res.status(200).json(musics)
    }
    else{
        res.status(204).json('message No music')
    }
}
exports.showMusic=async(req,res)=>{
    const music= await musicModel.findById(req.params.id)
    if (music !=null) {
        res.status(200).json(music)
    }
    else{
        res.status(404).json('No Record music')
    }
}
exports.updateMusic=async(req,res)=>{
    const data=await musicModel.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json(data)
}
exports.deleteMusic=async(req,res)=>{
    const data=await musicModel.findByIdAndDelete(req.params.id)
    res.status(200).json(data)
}