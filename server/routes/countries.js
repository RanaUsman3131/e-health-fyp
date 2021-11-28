const express = require("express");
const {
  getCountries,
  getCountry,
  createCountry,
  updateCountry,
  deleteCountry,
} = require("../controllers/countries");
const router = express.Router();

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getCountries).post(createCountry);

router.route("/:id").get(getCountry).put(updateCountry).delete(deleteCountry);

module.exports = router;
