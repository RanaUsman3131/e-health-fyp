const express = require("express");
const {
  getStates,
  getState,
  createState,
  updateState,
  deleteState,
} = require("../controllers/states");
const router = express.Router();

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getStates).post(createState);

router.route("/:id").get(getState).put(updateState).delete(deleteState);

module.exports = router;
