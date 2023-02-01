const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  bouquetname: String,
  description: String,
  quantityoFlower: Number,
  price: Number,
  imageurl: String,
  available: Boolean,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
