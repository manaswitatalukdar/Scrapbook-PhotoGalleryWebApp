const express = require('express');
const connectDB = require('./Database/Connection');
const cors = require('cors');
const app = express();
const User = require('./Database/User');

connectDB();
app.use(express.json({extended: false}));
app.use(cors());
app.use('/register', require('./API/Register'));
app.use('/login' , require('./API/Login'))
app.get('/userList', function(req,res){
    User.find({}, function(err, users) {
        res.send(users);  
      });
  })
const Port = process.env.Port || 5000;

app.listen(Port , () => console.log('Server started'));