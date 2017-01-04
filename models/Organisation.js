var mongoose = require("mongoose");

var userSchema = {
    _id: ObjectId,
    name: String,
    email: String,
    phone: String,
    company: String,
    taxType: String,
    workerCount: Number,
    rooms: Array,
    birthday: {
        type: Date,
        default: null
    },

};

/**
 * Организация. Статус организации может получить служба в которой больше одного человека, те, кому нужно вести учет помещений.
 * 
 * По умолчанию заполняется одна организация - своя. Так же можно вести учет организация - партнеров.
 */
var Organisation = module.exports = mongoose.model("Organisation", userSchema);

/**
 * Регистрация нового пользователя
 */
module.exports.registerUser = function (newOrg, callback) {
    newOrg.save(callback);
};

/**
 * Находим пользователя
 */
module.exports.findOrg = function (query, callback) {
    Courier.find(query, callback);
};