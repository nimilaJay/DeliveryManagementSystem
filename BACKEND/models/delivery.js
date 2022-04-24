const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Delivery = new Schema({
  driver: String,
  vehicle: String,
  driverId: String,
  phoneNo: String,
  vehicleNo: String,
});

const newDelivery = mongoose.model("delivery", Delivery);
module.exports = newDelivery;
