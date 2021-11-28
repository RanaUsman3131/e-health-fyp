const express = require("express");
const {
  getSals,
  getSal,
  createSal,
  updateSal,
  deleteSal,
} = require("../controllers/sals");
const router = express.Router();

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getSals).post(createSal);

router.route("/:id").get(getSal).put(updateSal).delete(deleteSal);

module.exports = router;
