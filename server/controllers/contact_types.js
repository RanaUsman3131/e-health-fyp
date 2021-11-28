const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const ContactType = require("../models/ContactType");

// @desc      Get all contact_types
// @route     GET /api/v1/contact_types
// @access    Private/Admin
exports.getContactTypes = asyncHandler(async (req, res, next) => {
  const contactTypes = await ContactType.find({});
  res.status(200).json({ code: "200", message: "", data: contactTypes });
});

// @desc      Get single contact_type
// @route     GET /api/v1/contact_types/:id
// @access    Private/Admin
exports.getContactType = asyncHandler(async (req, res, next) => {
  const contactType = await ContactType.findById(req.params.id);

  res.status(200).json({
    code: "200",
    message: "",
    data: contactType,
  });
});

// @desc      Create contact_type
// @route     POST /api/v1/contact_types
// @access    Private/Admin
exports.createContactType = asyncHandler(async (req, res, next) => {
  await ContactType.create(req.body);

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update contact_type
// @route     PUT /api/v1/contact_types/:id
// @access    Private/Admin
exports.updateContactType = asyncHandler(async (req, res, next) => {
  const contactType = await ContactType.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    code: "200",
    message: "Updated Successfully",
    data: contactType,
  });
});

// @desc      Delete contact_type
// @route     DELETE /api/v1/contact_types/:id
// @access    Private/Admin
exports.deleteContactType = asyncHandler(async (req, res, next) => {
  await ContactType.findByIdAndDelete(req.params.id);

  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
