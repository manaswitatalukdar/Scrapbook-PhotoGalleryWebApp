const mongoose = require('mongoose');
const URI = "mongodb+srv://Manaswita10:onlyme@cluster0.nj9rx.mongodb.net/test?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(URI,{useUnifiedTopology: true, useNewUrlParser: true});
    console.log('Database connected...');
};

module.exports = connectDB;