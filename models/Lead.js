const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Lead", leadSchema);
