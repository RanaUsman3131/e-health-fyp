const express = require("express");
const {
  getMaritalStatuses,
  getMaritalStatus,
  createMaritalStatus,
  updateMaritalStatus,
  deleteMaritalStatus,
} = require("../controllers/marital_status");
const router = express.Router();

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getMaritalStatuses).post(createMaritalStatus);

router
  .route("/:id")
  .get(getMaritalStatus)
  .put(updateMaritalStatus)
  .delete(deleteMaritalStatus);

module.exports = router;
