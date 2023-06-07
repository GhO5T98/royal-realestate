const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
},
    // Data e krijimit   
    { timestamps: true })

const Users = mongoose.model('Users', usersSchema)
module.exports = Users