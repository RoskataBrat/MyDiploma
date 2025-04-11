const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }, // Admin flag
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
