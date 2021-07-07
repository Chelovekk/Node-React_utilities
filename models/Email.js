const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email:{
        type: String,
        required:true
    }
})

module.exports = model('Email', schema)
