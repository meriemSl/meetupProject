const express = require('express');
const bodyParser = require('body-parser');
const api = require('./route/api');
<<<<<<< HEAD
const api2 = require('./route/api2');

=======
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f
const group = require('./components/group/groupController');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./config/routes')
const multer = require('multer');
const PORT = 3000;
<<<<<<< HEAD
const db = "mongodb://localhost:27017/mean"
=======
const db = "mongodb://localhost:27017/meanAuthAngularr"
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f
// import groupRoutes from "./components/group/groupRoutes";
const app = express();
app.use(cors());

app.use(
    bodyParser.json({
      limit: "100mb"
    })
  );
  
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use('/api', api)
<<<<<<< HEAD
app.use('/api2', api2)
app.use('/group',group )
app.use('/profileImage', express.static('upload/images'));

=======
app.use('/group',group )
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f

app.get('/',function(req,res){
    res.send('Hello from server')
})

app.listen(PORT,function(){
    console.log('Server running on Port'+PORT)
})
mongoose.connect(db, err => {
    if (err) {
        console.log('error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
<<<<<<< HEAD
})
=======
})
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f
