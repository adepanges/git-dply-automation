/**
  * @build at 2020
  * @author Ade Pangestu
**/
"use strict";

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Repositories = mongoose.Schema({
    group: {
        name: String,
        id: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    position: Number,
    status: {
        type: String,
        enum: ['pending', 'approved'],
        default: 'approved'
    },
    value: String, // can be color hexcode or image url
    is_deleted: { type: Boolean, default: false },
    created_at: Date,
    updated_at: Date,
    deleted_at: Date
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

ProductSchema.index({ slug: 1 }, { unique: true });
module.exports = mongoose.model('repositories', Repositories)

/**
  * @build at 2020
**/