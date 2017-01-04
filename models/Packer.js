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
var Packer = module.exports = mongoose.model("Packer", userSchema);

/**
 * Регистрация нового пользователя
 */
module.exports.registerPacker = function (newUser, callback) {
    newUser.save(callback);
};

/**
 * Находим пользователя
 */
module.exports.findPackers = function (query, callback) {
    Courier.find(query, callback);
};