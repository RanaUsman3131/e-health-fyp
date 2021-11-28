const express = require("express");
const {
  getLLC_Managements,
  getLLC_Management,
  createLLC_Management,
  updateLLC_Management,
  deleteLLC_Management,
} = require("../controllers/llc_managements");
const router = express.Router();

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getLLC_Managements).post(createLLC_Management);

router
  .route("/:id")
  .get(getLLC_Management)
  .put(updateLLC_Management)
  .delete(deleteLLC_Management);

module.exports = router;
