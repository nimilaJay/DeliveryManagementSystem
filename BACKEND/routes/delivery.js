const router = require("express").Router();
const Delivery = require("../models/delivery");

router.route("/create").post(async (req, res) => {
  //route for creating database insertion
  const { driver, vehicle, driverId, vehicleNo } = req.body;

  const phoneNo = Number(req.body.phoneNo);

  const newDelivery = new Delivery({
    driver,
    vehicle,
    driverId,
    phoneNo,
    vehicleNo,
  });

  await newDelivery
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((error) => res.status(500).json({ success: false, error: error })); // else save to the db
});

router.route("/").get(async (req, res) => {
  //route for fetching al the data
  await Delivery.find()
    .then((Delivery) => res.json(Delivery))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/get/:id").get(async (req, res) => {
  //route for getting a relavant document using id
  const { id } = req.params;

  await Delivery.findById(id) //find by the document by id
    .then((todo) => res.json(todo))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/delete/:id").delete(async (req, res) => {
  //route for deleting a relavant document using id
  const { id } = req.params;

  await Delivery.findByIdAndDelete(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/update/:id").put(async (req, res) => {
  //route for updating a relavant document using id
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const { driver, vehicle, driverId, vehicleNo } = req.body;

  const phoneNo = Number(req.body.phoneNo);

  await Delivery.findByIdAndUpdate(id, {
    driver,
    vehicle,
    driverId,
    vehicleNo,
    phoneNo,
  }) //find the document by and update the relavant data
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, Error: error }));
});

module.exports = router;
