/** @format */

const mongoose = require("mongoose");

const CaterorySchema = new mongoose.Schema(
{

    name: {
        type: String,
        required: true
    }

},{timestamps: true})



module.exports =mongoose.model('Category ', CaterorySchema)