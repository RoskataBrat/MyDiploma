const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  address: String,
  phone: String,
  items: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  total: Number,
  date: { type: Date, default: Date.now },
});


module.exports = mongoose.model("Order", OrderSchema);
