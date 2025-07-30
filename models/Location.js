// backend/models/Location.js
const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
   ip: String,
  city: String,
  country: String,
  latitude: Number,
  longitude: Number,
  page: String,
  referrer: String,
  language: String,
  deviceType: String,
  userAgent: String,
  timestamp: String,
});

module.exports = mongoose.model("Location", locationSchema);
