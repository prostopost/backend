var mongoose = require("mongoose");
var config = require('../config');

/**
 * Mongoose will reconnect self to database
 */
mongoose.connect(config.mongo.localhostConnectionString);

var migration = function () {
    var CheckConnectionTableSchema = {
        name: String,
    };

    var ConTable = mongoose.model('ConTable', CheckConnectionTableSchema);

    var example = new ConTable({
        name: 'Some name here'
    });
    example.save(function (err, o, affected) {
        if (err) {
            console.log("DB Error");
        }
        console.log(arguments);
    });
};

migration();