const express = require("express");
const {
  getAddresses,
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} = require("../controllers/addresses");

const router = express.Router({ mergeParams: true });

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getAddresses).post(createAddress);

router.route("/:id").get(getAddress).put(updateAddress).delete(deleteAddress);

module.exports = router;
