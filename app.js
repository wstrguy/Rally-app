// import packages
const dotenv = require("dotenv");
dotenv.config();

// importing express
const express = require("express");
// create an instance for express 
const app = express();

// middleware 
app.use(express.json());

const connDB = require("./config/db");
const userRoutes = require("./routes/user.routes")

// const router = require("./routes/user.routes")
// app.use(router);

// // mount routes for easy versioning 
app.use("/api/v1",userRoutes);

// invoking connDB
connDB();


module.exports = { app };


