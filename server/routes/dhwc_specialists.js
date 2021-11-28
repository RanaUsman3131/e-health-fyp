const express = require("express");
const {
  getDHWC_Specialists,
  getDHWC_Specialist,
  createDHWC_Specialist,
  updateDHWC_Specialist,
  deleteDHWC_Specialist,
} = require("../controllers/dhwc_specialists");
const router = express.Router();

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getDHWC_Specialists).post(createDHWC_Specialist);

router
  .route("/:id")
  .get(getDHWC_Specialist)
  .put(updateDHWC_Specialist)
  .delete(deleteDHWC_Specialist);

module.exports = router;
