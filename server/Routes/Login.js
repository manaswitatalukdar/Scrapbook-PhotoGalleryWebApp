const express = require('express');
const mongoose = require('mongoose');
const User= require('../Database/User'); 

const route = express.Router();

route.post('/', async(req,res)=>{
  let user = await User.findOne({ username: req.body.username, password: req.body.password });
  if (user) {
    req.session.user = user;
    res.json(user);
    console.log('logged in');
} else {
  res.send({message: 'Wrong username or password'});
}
})



module.exports = route;