require("dotenv").config();

const ProductData = require("./BACKEND/data/order");
const Product = require("./BACKEND/models/order");
const connectDB = require("./BACKEND/config/db");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(ProductData);

    console.log("Data Import Success !");
    process.exit();
  } catch (error) {
    console.error("Error with importing data");
    process.exit(1);
  }
};

importData();
