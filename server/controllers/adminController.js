const Review = require("../models/Review");

exports.getPending = async (req, res) => {
  try {
    const data = await Review.find({ status: "pending" }).sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.approveReview = async (req, res) => {
  try {
    await Review.findByIdAndUpdate(req.params.id, {
      status: "approved"
    });
    res.json({ message: "Approved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.rejectReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Rejected" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};