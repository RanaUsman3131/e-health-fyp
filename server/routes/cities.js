const express = require("express");
const {
  getCities,
  getCity,
  createCity,
  updateCity,
  deleteCity,
} = require("../controllers/cities");
const router = express.Router();

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getCities).post(createCity);

router.route("/:id").get(getCity).put(updateCity).delete(deleteCity);

module.exports = router;
