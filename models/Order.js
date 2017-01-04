var mongoose = require("mongoose");

var orderSchema = {
    _id: ObjectId,
    status: String,
    clientId: String,
    type: String,
    pointA: {
        type: String,
        default: null
    },
    pointB: String,
    callId: String,
    courierId: String,
    packerId: String,
    rating: Number,
    geted: Date,
    toDelivery: Date,
    weigth: Number
};

/**
 * Пользователь - это обычный клиент компании или курьера. Просто лид.
 */
var Order = module.exports = mongoose.model("Order", orderSchema);

/**
 * Регистрация нового пользователя
 */
module.exports.registerOrder = function (newOrder, callback) {
    newOrder.save(callback);
};

/**
 * Находим пользователя
 */
module.exports.findOrders = function (query, callback) {
    Courier.find(query, callback);
};