//configure database here
const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to MongoDB successfully");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

module.exports = mongoose;