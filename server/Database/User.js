const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
       default: ''
    },
    images:      [String]
    
})

user.pre('save', async function (next){
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
})


module.exports = User = mongoose.model('user', user);
