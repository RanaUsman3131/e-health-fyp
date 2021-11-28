const express = require("express");
const {
  getTaxes,
  getTax,
  createTax,
  updateTax,
  deleteTax,
} = require("../controllers/taxes");
const router = express.Router();

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getTaxes).post(createTax);

router.route("/:id").get(getTax).put(updateTax).delete(deleteTax);

module.exports = router;
