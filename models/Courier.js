var mongoose = require("mongoose");

var courierSchema = mongoose.Schema({
    name: String,   //courier name
    lastname: String,   //courier last name
    regDate: {  //registration date.
        type: Date,
        default: Date.now
    },
    email: Sting,
    autoType: Number,   //one of many autotypes
    auto: String,   //full auto description(he fill its self)
    isFree: Boolean,    //if courier is full free, he can take hot orders
    license: String,    //pay tax?
    birthDay: Number,   //gratuliations programm is cool
    specs: Array    //orders type loved by courier
});

var Courier = module.exports = mongoose.model("Courier", courierSchema);

module.exports.registerCourier = function (newCourier, callback) {
    newCourier.save(callback);
};

module.exports.findCouriers = function (query, callback) {
    Courier.find(query, callback);
};