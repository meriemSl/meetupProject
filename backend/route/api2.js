const express = require('express');
const jwt  = require('jsonwebtoken');
const router = express.Router();
const User = require('../model/user');

const mongoose = require('mongoose');

//----------------------//
const multer = require("multer");
const path = require("path");



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
   const upload = multer({storage: storage});
   
router.use('/profileImage', express.static('upload/images'));
//--------------------------------//

router.put('/update/:id', (req, res, next) => {
  console.log(req.file);
    const user = new User({
        _id: req.params.id,
        firstname: req.body.firstnme,
        bio: req.body.bio,
        email: req.body.email,
        phone: req.body.phone,
        ville: req.body.ville,
        profilink: req.body.profilink,
        occupation: req.body.occupation,
        //profileImage : req.file.filename

  
      })
      User.updateOne({_id: req.params.id}, user).then(
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



  router.put('/updateimage/:id',upload.single('profileImage'), (req, res, next) => {
    console.log(req.file);
      const user = new User({
          _id: req.params.id,
        
          profileImage : req.file.filename
  
    
        })
        User.updateOne({_id: req.params.id}, user).then(
        () => {
          res.status(201).json({
            message: 'image updated successfully!'
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

router.get('/find/:userId',function (req,res) { 
  
    User.findById(req.params.userId).then((result) => {
        res.status(200).send(result);
    });
  })

 


  

module.exports = router;