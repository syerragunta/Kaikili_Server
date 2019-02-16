<<<<<<< HEAD


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root@198.211.109.120:27017/";
//
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("KaikiliService");
//     dbo.createCollection("SubService", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("KaikiliService");
//     var myobj = { serviceName: "TV Mount Installation", serviceId: "1", serviceInfo: "tv service information ", isActive : 1 };
//     dbo.collection("Service").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });
=======
var mongoose = require('mongoose');

var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://root:kaikili123@198.211.109.120:27017/";
var url = "mongodb://root@157.230.188.53:27017/";


// MongoClient.connect(url, function (err, db) {

    // MongoClient.connect(url, function(err, client) {
    //     if (err) {
    //         console.error('An error occurred connecting to MongoDB: ', err);
    //     } else {
    //         const db = client.db("kdb")
    //         db.collection("add_services", function (err, collection) {
    //             collection.find().toArray(function(err, res) {
    //                 callback(res)
    //             })
    //         })
    //         // db.close()
    //     }
    // });

//
//     if (err) {
//         console.log(err);
//     }
//     var dbo = db.db("db");
//
//
//     // var myobj = { serviceName: "TV Mount Installation", serviceId: "1", serviceInfo: "tv service information ", isActive : 1 };
//     dbo.collection("add_services").find({}).toArray(function (err, docs) {
//         if (err) {
//             console.log(err);
//             var status = {
//                 status: 0,
//                 message: "Failed"
//             };
//             console.log(status);
//             callback(status);
//
//         } else {
//             var status = {
//                 status: 1,
//                 message: "Success Get all service to Mongodb",
//                 data: docs
//             };
//             console.log(status);
//             // db.close();
//             callback(status);
//         }
//     });
// });


//
// MongoClient.connect(url, function(err, db) {
//     if (err) {
//         console.log(err);
//     }
//     var dbo = db.db("KaikiliService");
//     dbo.createCollection("SubService11", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("KaikiliService");
    var myobj = { serviceName: "TV Mount Installation", serviceId: "1", serviceInfo: "tv service information ", isActive : 1 };
    dbo.collection("Service").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});
>>>>>>> 2/14/2019
