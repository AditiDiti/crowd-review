const express = require("express");
const router = express.Router();
const controller = require("../controllers/reviewController");

router.get("/:businessId", controller.getReviews);
router.post("/", controller.addReview);

module.exports = router;