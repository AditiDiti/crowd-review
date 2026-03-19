const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

router.get("/pending", controller.getPending);
router.post("/approve/:id", controller.approveReview);
router.delete("/reject/:id", controller.rejectReview);

module.exports = router;