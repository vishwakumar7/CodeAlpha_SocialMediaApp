const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/codealpha_social");

const db = mongoose.connection;
db.on("open", () => console.log("MongoDB Connected"));
db.on("error", (err) => console.error("MongoDB connection error:", err));

module.exports = mongoose;
