const express = require("express");
const {
  getEmployments,
  getEmployment,
  createEmployment,
  updateEmployment,
  deleteEmployment,
} = require("../controllers/employments");

const router = express.Router({ mergeParams: true });

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getEmployments).post(createEmployment);

router
  .route("/:id")
  .get(getEmployment)
  .put(updateEmployment)
  .delete(deleteEmployment);

module.exports = router;
