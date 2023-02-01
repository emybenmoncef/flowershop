const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/flowershop";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then( () => {
  console.log("Connected to database flowershop");
}). catch ((err)=>{
  console.log(err)
});
const db = mongoose.connection;

module.exports = db
