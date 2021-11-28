const express = require("express");
const {
  getContactTypes,
  getContactType,
  createContactType,
  updateContactType,
  deleteContactType,
} = require("../controllers/contact_types");
const router = express.Router();

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

router.route("/").get(getContactTypes).post(createContactType);

router
  .route("/:id")
  .get(getContactType)
  .put(updateContactType)
  .delete(deleteContactType);

module.exports = router;
