const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username:{
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})


module.exports = User = mongoose.model('user', user);
