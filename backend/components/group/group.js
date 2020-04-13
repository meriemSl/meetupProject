//group Model

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema ({

    name: { type: String, required: true },

    description: { type: String, required: false },

    image: { type: String, required: true },

    users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"}
           ],

    admin: {type: mongoose.Schema.Types.ObjectId ,
            ref: "User",
            required:false},

    tags: [{type:String, required:false}],

});
 groupSchema.methods.createGroup = function(groupData) {  
    const group = new Group(groupData);
    return group.save();
};
groupSchema.methods.findById = function(id)  {
    return Group.findById(id).then((result) => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result;
    });
};
groupSchema.methods.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Group.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, groups) {
                if (err) {
                    reject(err);
                } else {
                    resolve(groups);
                }
            })
    });
};

groupSchema.methods.removeById = (groupId) => {
    return new Promise((resolve, reject) => {
        Group.remove({_id: groupId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};


const Group = module.exports = mongoose.model('group',groupSchema);