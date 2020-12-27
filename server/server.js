const express = require('express');
const connectDB = require('./Database/Connection');
const cors = require('cors');
const app = express();
const User = require('./Database/User');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
dotenv.config();

connectDB();
app.use(express.json({extended: false}));
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET","POST"],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  key: "userId", 
  secret: process.env.SECRET, 
  resave: false, 
  saveUninitialized: true, 
  cookie:{
      expires: 60*60*24
}}))
app.use('/register', require('./Routes/Register'));
app.use('/login' , require('./Routes/Login'));
app.get('/userList', function(req,res){
    User.find({}, function(err, users) {
        res.send(users);  
      });
  });

app.get('/profile', function(req,res){
  console.log(req.session.user);
  if (!req.session.user) {
    res.send({message: 'Not logged in'});
    return res.status(401).send();
} 
console.log('profile found');
return res.status(200).send(req.session.user);
});

app.get('/logout', async(req,res)=>{
  req.session.destroy();
  return res.status(200).send();
});

const Port = process.env.Port || 5000;

app.listen(Port , () => console.log('Server started'));