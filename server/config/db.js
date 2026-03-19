const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://AditiDiti:Aditi19@cluster0.t4hrvqg.mongodb.net/reviewsDB"
    );

    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;