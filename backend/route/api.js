const express = require('express');
const jwt  = require('jsonwebtoken');
const router = express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/meanAuthAngularr"

mongoose.connect(db, err => {
    if (err) {
        console.log('error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
})



router.get('/', (req, res) => {
    res.send('From API route');
})




router.post('/register', (req, res) => {
    let userData = req.body;
  //  console.log(req.body)
  
    User.findOne({email:userData.email},(error,user) =>{
        if(error){
            console.log(error)
        } else {
            if(!user){
                let user = new User(userData);

                user.save((error, registeredUser) => {
                    if (error){
                        console.log(error)
                        
                    }
                    else if(user.password !== userData.password){
                       // res.status(401).send('invalid pass')
                    }
                    else
                    {
                        let payload = { subject: registeredUser._id}
                        let token = jwt.sign(payload, 'secretKey')
                        res.status(200).send({token})
                    }
                }); 


            }else {
              
                res.status(200).send('Email has already taken')
            }
        }
    })
  
});

router.post('/login',(req,res) => {
    let userData = req.body

    User.findOne({email:userData.email},(error,user) =>{
        if(error){
            console.log(error)
        } else {
            if(!user){
                res.status(401).send('Invalid email')
            } else if(user.password !== userData.password){
                res.status(401).send('invalid pass')
            }else {
                let payload = { subject: user._id}
                let token = jwt.sign(payload,'secretKey')
                res.status(200).send({token})
            }
        }
    })
})

module.exports = router;