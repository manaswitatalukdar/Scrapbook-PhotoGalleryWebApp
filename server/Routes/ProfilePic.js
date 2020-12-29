const express = require('express');
const mongoose = require('mongoose');
const User= require('../Database/User'); 

const route = express.Router();

route.post('/', async(req,res)=>{
  if (req.files === null) {
    return res.status(401).send();
} else {
    const file = req.files.file;
    let user = await User.findOne({ username: req.body.username});
    user.profile_picture = file;
}
})



module.exports = route;