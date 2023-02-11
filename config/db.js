const mongoose = require("mongoose");

let dbUrl = process.env.MONGO_URI;

mongoose.set("strictQuery", false);

const connDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("connected to db 🔒🔒🔒");
    } catch (error) {
        console.log(error);
    }
}


module.exports =connDB;