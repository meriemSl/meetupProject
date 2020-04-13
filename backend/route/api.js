const express = require('express');
const jwt  = require('jsonwebtoken');
const router = express.Router();
const User = require('../model/user');
const Event = require('../model/event');
const mongoose = require('mongoose');

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: storage,
  limits: {
      fileSize: 10000000000
  }
})

router.use('/imageUrl', express.static('upload/images'));


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
/*router.post("/upload", upload.single('imageUrl'), (req, res) => {

  res.json({
      success: 1,
      profile_url: `http://localhost:3000/imageUrl/${req.file.filename}`
  })
})
*/

router.post('/addevent',upload.single('imageUrl'), (req, res, next) => {
    const event = new Event({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.file.filename,
      dateDebut: req.body.dateDebut,
      dateFin: req.body.dateFin,
      lieu: req.body.lieu
    });
    event.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

  router.delete('/deleteevent/:id', (req, res, next) => {
    Event.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  router.put('/updateevent/:id', (req, res, next) => {
    const event = new Event({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        dateDebut: req.body.date,
        dateFin: req.body.date,
        lieu: req.body.lieu
      });
      Event.updateOne({_id: req.params.id}, event).then(
      () => {
        res.status(201).json({
          message: 'Event updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  router.get('/findAll', (req, res, next) => {
    Event.find().then(
      (events) => {
        res.status(200).json(events);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  router.get('/find/:id', (req, res, next) => {
    Event.findOne({
      _id: req.params.id
    }).then(
      (event) => {
        res.status(200).json(event);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  });
module.exports = router;

