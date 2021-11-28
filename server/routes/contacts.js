const express = require("express");
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contacts");

// Include other resource routers
const addressRouter = require("./addresses");
const employmentRouter = require("./employments");

const router = express.Router();

// const advancedResults = require("../middlewares/advancedResults");
// const { protect, authorize } = require("../middlewares/auth");
// It will get in touch in future , when protection and authorization will get implemented

// Re-route into other resource routers
router.use("/:contactId/addresses", addressRouter);
router.use("/:contactId/employments", employmentRouter);
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
