var mongoose = require("mongoose");

var roomSchema = mongoose.Schema({
    _id: ObjectId,
    title: String,
    description: String,
    location: String,
    volume: String,
    temperature: Number,
    water: Boolean,
    elektr: Boolean,
    gaz: Boolean,
    security: {
        type: Number,
        default: 1
    },
});

var Room = module.exports = mongoose.model("Room", roomSchema);

module.exports.registerAuto = function (newroom, callback) {
    newroom.save(callback);
};

module.exports.findrooms = function (query, callback) {
    Auto.find(query, callback);
};