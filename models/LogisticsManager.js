var mongoose = require("mongoose");

var userSchema = {
    _id: ObjectId,
    name: String,
    lastname: String,
    email: String,
    phone: String,
    company: String,
    birthday: {
        type: Date,
        default: null
    },
};

/**
 * Менеджер по логистике, диспетчер
 * 
 * Диспетчер может общаться с клиентами.
 */
var LogisticManager = module.exports = mongoose.model("LogisticManger", userSchema);

/**
 * Регистрация нового диспетчера
 */
module.exports.registerManager = function (newUser, callback) {
    newUser.save(callback);
};

/**
 * Находим диспетчера
 */
module.exports.findManagers = function (query, callback) {
    Courier.find(query, callback);
};