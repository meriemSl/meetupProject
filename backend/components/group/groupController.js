const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const  Group  = require ("./group");



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Upload/images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
   const upload = multer({storage: storage});

//------------------------add group----------------//
router.post('/createGroup', upload.single('image'),function (req,res) { 
   
    group = new Group() 
    console.log(req.file.filename)
    req.body.image = req.file.filename
    group.createGroup(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
    })


//------------------------GET ONE GROUP----------------//
router.get('/group/:groupId',function (req,res) { 
        group = new Group()
        group.findById(req.params.groupId).then((result) => {
            res.status(200).send(result);
        });
     });
     
//------------------------GET GROUPS----------------//
router.get('/allgroup',function (req,res) {
    group = new Group() 
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    group.list(limit, page).then((result) => {
        res.status(200).send(result);
    })
 });


//------------------------delete GROUP----------------//
router.delete('/delete/:groupId',function (req,res) {
 group = new Group() 
 group.removeById(req.params.groupId)
 .then((result)=>{
     res.status(200).send({message : 'success'});
     res.status(204).send(result);
 });
})


module.exports = router;

