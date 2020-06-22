//Le modele Event


var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    name: { type: String, required: false },
    description: { type: String, required: true },
    image: { type: String, required: false },
    dateDebut: {type:Date, required:true},
    dateFin: {type:Date, required:false},
    lieu: {type:String, required:false},

});

var Event = module.exports = mongoose.model('Event',eventSchema);