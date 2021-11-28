const express = require("express");
const {
  getOperations,
  getOperation,
  createOperation,
  updateOperation,
  deleteOperation,
} = require("../controllers/operations");
const router = express.Router();

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getOperations).post(createOperation);

router
  .route("/:id")
  .get(getOperation)
  .put(updateOperation)
  .delete(deleteOperation);

module.exports = router;
