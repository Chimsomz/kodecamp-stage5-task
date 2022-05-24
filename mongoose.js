 const mongoose = require("mongoose");
 //import mongoose
const url = 'mongodb://localhost:27017';

 mongoose.connect(url, { useNewUrlParser: true });

 const conn = mongoose.Connection;

 conn.on("error", console.error.bind(console,"connection error:"));
conn.on("connected", () => {
    console.log("aconnected to monogoDB");
 });
 conn.on("disconnected", () => {
     console.log("not connected to monogoDB");
 });

module.exports = conn;