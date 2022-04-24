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
