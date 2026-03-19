const express = require("express");
const router = express.Router();
const controller = require("../controllers/businessController");

router.get("/", controller.getBusinesses);
router.get("/:id", controller.getBusinessById);

module.exports = router;