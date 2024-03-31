const mongoose = require('mongoose')
const { transformWithEsbuild } = require('vite')

const uploadSchema = new mongoose.Schema({
    photo:{
        type:String,
        required:true,
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("Uploads",uploadSchema)