const {Router} = require('express');
const uploadMiddleware = require('../middleware/multer');
const uploadModel = require('../models/uploadModel');
const router = Router();

router.get('/get', async (req,res)=>{
    const all = await uploadModel.find().sort({createdAt:"descending"})
    res.send(all)
})

router.post('/save', uploadMiddleware.single("photo"),(req,res)=>{
    const photo = req.file.filename;
    console.log(photo);
    try{
         uploadModel.create({photo})
        .then((data)=>{
            console.log('upload successful')
            res.send(data)
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router