
// external imports 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// making a user schema 
const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    type: String,
    isvarified: false,
})

const User = mongoose.model('User', userSchema);


module.exports = User;