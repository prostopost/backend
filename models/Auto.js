var mongoose = require("mongoose");

var autoSchema = mongoose.Schema({
    _id: ObjectId,
    reg: String,
    brand: String,
    type: Number,
    courier: String,
    volume: Number,
    color: String,
    body: String,
    technicalInsceptionExpirationDay: Date,
    milage: Number,
    wheel: Number, //руль. Слева - 1, справа -2
    drive: Number, //1-передний, 2 - полный, 3 - задний
    fuelType: String,
    KPP: Number,    //КПП
});

var Auto = module.exports = mongoose.model("auto", autoSchema);

module.exports.registerAuto = function (newauto, callback) {
    newauto.save(callback);
};

module.exports.findautos = function (query, callback) {
    Auto.find(query, callback);
};