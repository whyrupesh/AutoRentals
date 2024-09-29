// models/Car.js
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  type: { type: String, required: true },
  model: { type: String, required: true },
  perHourCharge: { type: Number, required: true },
  location: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
