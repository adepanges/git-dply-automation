"use strict";

const mongoose = require('mongoose')

exports.init = () => {
    mongoose.Promise = require('q').Promise;
    mongoose.connect(secret.database, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("connected to the database")
        }
    })
}

exports.Authorize = require('./authorize')
exports.AuthorizeApp = require('./authorize_app')