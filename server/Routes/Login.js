const express = require('express');
const mongoose = require('mongoose');
const User = require('../Database/User'); 
const bcrypt = require('bcrypt');
const route = express.Router();

route.post('/', async(req,res)=>{
  let user = await User.findOne({ username: req.body.username});
  if (user) {
    try {
      if(await bcrypt.compare(req.body.password, user.password)){
        req.session.user = user;
        res.json(user);
        console.log('logged in');
      }
      else{
        res.send({message: 'Wrong password'});
      }
    } catch {
      res.status(500).send();
    }
} else {
  res.send({message: 'User not found!'});
}
})



module.exports = route;