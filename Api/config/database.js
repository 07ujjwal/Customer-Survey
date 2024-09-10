const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("DB Connected!");
  } catch (error) {
    console.log("DB Connection Failed");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
