const router = require("express").Router();
const {
  getAllOrders,
  getOrderById,
  updateOrderById,
} = require("../controllers/order");

router.route("/").get(getAllOrders);
router.route("/:id").get(getOrderById);
router.route("/update/:id").put(updateOrderById);

module.exports = router;
