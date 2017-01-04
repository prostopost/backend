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
 * Пользователь - это обычный клиент компании или курьера. Просто лид.
 */
var Manager = module.exports = mongoose.model("User", userSchema);

/**
 * Регистрация нового пользователя
 */
module.exports.registerManager = function (newUser, callback) {
    newUser.save(callback);
};

/**
 * Находим пользователя
 */
module.exports.findManagers = function (query, callback) {
    Courier.find(query, callback);
};