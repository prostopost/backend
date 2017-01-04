var mongoose = require("mongoose");

var patSchema = {
    _id: ObjectId,
    name: String,
    description: String,
    price: String

};
 
/**
 * Цены и типы услуг
 */
var PAT = module.exports = mongoose.model("PAT", patSchema);

/**
 * Создать новый тип
 */
module.exports.newPAT = function (newUser, callback) {
    newUser.save(callback);
};

/**
 * Находим услугу
 */
module.exports.findPAT = function (query, callback) {
    Courier.find(query, callback);
};