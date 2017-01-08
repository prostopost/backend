var mongoose = require("mongoose");

var userSchema = {
    name: {
        type: String,
        required: true
    },
    lastname: {
        required: true,
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    phone: {
        required: false,
        type: String,
        unique: true
    },
    company: {
        required: false,
        type: String,
    },
    birthday: {
        type: Date,
        default: null
    },

};

/**
 * Пользователь - это обычный клиент компании или курьера. Просто лид. Сюда записывать все контактные данные.
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
module.exports.findUser = function (query, callback) {
    User.findOne(query, callback);
};