//Le modele Event


var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    dateDebut: {type:Date, required:true},
    dateFin: {type:Date, required:true},
    lieu: {type:String, required:true},

});

var Event = module.exports = mongoose.model('Event',eventSchema);