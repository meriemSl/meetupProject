//Le modele User 


var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
   firstname: {type:String, required:true},
    email: {type:String, required:true},
<<<<<<< HEAD
    password: {type:String, required:true},
    bio: {type:String, required:false},
    ville: {type:String, required:false},
    phone: {type:String, required:false},
    occupation: {type:String, required:false},
    profilink: {type:String, required:false},
    profileImage:{type:String, required:false},
=======
    password: {type:String, required:true}
>>>>>>> 9903b325cca36ee574cd79beb7683a58dc383b6f
});

var User = module.exports = mongoose.model('User',userSchema);
