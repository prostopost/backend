var mongoose = require("../lib/mongoose");
var async = require("async");

var example = {};

var ExampleUser = mongoose.model("ExampleUser", {
    name: String,
    email: String
});

example.createDBSeed = function () {
    mongoose.connection.on('open', function () {
        //get native driver mongo coneection object
        var db = mongoose.connection.db;
        db.dropDatabase(function (err) {
            if (err) {
                throw err;
            }
            async.parallel(
                function (callback) {
                    var user = new ExampleUser({ name: "Daniil", email: "daniilborowkow@yandex.ru" });
                    user.save(function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Created succesfly");
                        }

                    });
                },
                function (callback) {
                    var admin = new ExampleUser({ name: 'admin', email: "admin@localhost.app" });
                    admin.save(function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Created succesfly");
                        }

                    });
                },
                function (callback) {
                    var admin = new ExampleUser({ name: 'admin-main', email: "admin-main@localhost.app" });
                    admin.save(function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Created succesfly");
                        }

                    });
                },
                function (err, results) {
                    console.log(arguments);
                    mongoose.disconnect();
                }
            );
        });
    });
};

module.exports = example;

example.createDBSeed();