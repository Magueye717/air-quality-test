const express = require("express");
const router = express.Router();

const airController = require("../controllers/air_quality.controller");

// Air quality routes
router.get("/pollution", airController.get_polution_by_coordinates);
router.get("/max_pollution", airController.max_pollution);

module.exports = router;