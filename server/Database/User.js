const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username:{
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    location: {
        type: String,
        default: 'Unknown'
    } ,
    profile_picture:
    {
       type: String,
    }
    
})


module.exports = User = mongoose.model('user', user);
