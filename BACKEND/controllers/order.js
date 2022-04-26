const Order = require("../models/order");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.send(500).json({ message: "Server Error" });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.send(500).json({ message: "Server Error" });
  }
};

exports.updateOrderById = async (req, res) => {
  const { id } = req.params;
  const { name, address, status, vehicleNo } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(id, {
      name,
      address,
      status,
      vehicleNo,
    });
  } catch (error) {
    res.send(500).json({ message: "Server Error" });
  }
};

exports.createOrder = async (req, res) => {
  const { oId, name, address, status, vehicleNo } = req.body;

  const newOrder = new Order({
    oId,
    name,
    address,
    status,
    vehicleNo,
  });
  try {
    await newOrder.save();
  } catch (error) {
    res.send(500).json({ message: "Server Error" });
  }
};

exports.deleteOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    await Order.findByIdAndDelete(id);
  } catch (error) {
    res.send(500).json({ message: "Server Error" });
  }
};

exports.trackOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.find({ oId: id });
    res.json(order);
  } catch (error) {
    console.error(error);
    res.send(500).json({ message: "Server Error" });
  }
};
