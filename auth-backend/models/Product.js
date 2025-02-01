const mongoose = require("mongoose");
const axios = require("axios"); // Import axios

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number,
});


module.exports = mongoose.model("Product", ProductSchema);
