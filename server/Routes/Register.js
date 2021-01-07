const express = require('express');
const mongoose = require('mongoose');
const User = require('../Database/User'); 

const route = express.Router();

route.post('/', async(req,res)=>{
    let user = {};
    if(req.files !== null) {const profile_picture = req.files.image;
        user.profile_picture = profile_picture.name;
    profile_picture.mv('./public/'+profile_picture.name, function(err){
        if(err){
            console.group('err');
            res.json({"status": "File not uploaded"});
        }
    });}
    const{username, password, email, location} = req.body;
    let exists = false;
    await User.findOne({
       username: username
   }, function (err, existingUser) {
    if(existingUser) {
        exists = true;
    }
   });
   console.log(exists);
   if(exists) res.send('Username already exists');
   else{
    user.username = username;
    user.password = password;
    user.email = email;
    user.location = location;
    let userModel = new User(user); 
    await userModel.save();
    res.json(userModel);
   }
   
})

module.exports = route;