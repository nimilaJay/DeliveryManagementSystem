const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema({
  oId: String,
  name: String,
  address: String,
  status: String,
  vehicleNo: String,
});

const newOrder = mongoose.model("order", Order);
module.exports = newOrder;
