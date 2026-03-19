const Review = require("../models/Review");

exports.getReviews = async (req, res) => {
  try {
    const data = await Review.find({
      businessId: req.params.businessId,
      status: "approved"
    }).sort({ createdAt: -1 });

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addReview = async (req, res) => {
  try {
    const review = new Review({
      ...req.body,
      status: "pending"
    });

    await review.save();
    res.json({ message: "Review submitted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};