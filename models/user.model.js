const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    nextOfKin: {
        type: String,
        required: true,
    },
    nextOfKinNum: {
        type: Number,
        required: true,
    }
},
{
    timestamps: true,
  }
);

const User = mongoose.model("User", customerSchema);

module.exports = { User };