// backend/models/Location.js
const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  ip: String,
  city: String,
  region: String,
  country: String,
  latitude: Number,
  longitude: Number,
  timestamp: String,
});

module.exports = mongoose.model("Location", locationSchema);
