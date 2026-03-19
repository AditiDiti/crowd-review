const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business"
  },
  user: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: String,
  status: {
    type: String,
    enum: ["pending", "approved"],
    default: "pending"
  }
});

module.exports = mongoose.model("Review", reviewSchema);