const express = require('express');
const bodyParser = require('body-parser');
const api = require('./route/api');
const api2 = require('./route/api2');

const group = require('./components/group/groupController');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./config/routes')
const multer = require('multer');
const PORT = 3000;
const db = "mongodb://localhost:27017/meanAuthAngularr"
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
app.use('/api2', api2)
app.use('/group',group )
app.use('/profileImage', express.static('upload/images'));


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
})
