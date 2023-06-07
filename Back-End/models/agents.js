const mongoose = require('mongoose')


const agentsSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true
        },
        bio: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        whatsapp: {
            type: String,
            require: true
        },
        image:{
            type:String,
            require:true
        },
    }
)

const Agents = mongoose.model('Agents', agentsSchema)
module.exports = Agents