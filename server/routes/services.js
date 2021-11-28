const express = require("express");
const {
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
} = require("../controllers/services");
const router = express.Router();

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getServices).post(createService);

router.route("/:id").get(getService).put(updateService).delete(deleteService);

module.exports = router;
