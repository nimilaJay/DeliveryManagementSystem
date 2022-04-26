const router = require("express").Router();
const {
  getAllOrders,
  getOrderById,
  updateOrderById,
  createOrder,
  deleteOrderById,
  trackOrder,
} = require("../controllers/order");

router.route("/").get(getAllOrders);
router.route("/:id").get(getOrderById);
router.route("/update/:id").put(updateOrderById);
router.route("/create").post(createOrder);
router.route("/delete/:id").delete(deleteOrderById);
router.route("/track/:id").get(trackOrder);

module.exports = router;
