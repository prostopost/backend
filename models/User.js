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
var User = module.exports = mongoose.model("User", userSchema);

/**
 * Регистрация нового пользователя
 */
module.exports.registerUser = function (newUser, callback) {
    newUser.save(callback);
};

/**
 * Находим пользователя
 */
module.exports.findUsers = function (query, callback) {
    Courier.find(query, callback);
};