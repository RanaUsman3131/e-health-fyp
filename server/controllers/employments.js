const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Employment = require("../models/Employment");

// @desc      Get all employment
// @route     GET /api/v1/employment
// @access    Private/Admin
exports.getEmployments = asyncHandler(async (req, res, next) => {
  let filter = {};
  let required = {
    companyName: 1,
    jobTitle: 1,
  };
  if (req.params.contactId) {
    filter = {
      contact: req.params.contactId,
    };
    required = {};
  }
  const employments = await Employment.find(filter, required);
  res.status(200).json({
    code: "200",
    message: "",
    data: employments,
  });
});

// @desc      Get single employment
// @route     GET /api/v1/employment/:id
// @access    Private/Admin
exports.getEmployment = asyncHandler(async (req, res, next) => {
  const employment = await Employment.findById(req.params.id, {
    companyName: 1,
    jobTitle: 1,
  });

  res.status(200).json({
    code: "200",
    message: "",
    data: employment,
  });
});

// @desc      Create employment
// @route     POST /api/v1/employment
// @access    Private/Admin
exports.createEmployment = asyncHandler(async (req, res, next) => {
  await Employment.create(req.body);

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update employment
// @route     PUT /api/v1/employment/:id
// @access    Private/Admin
exports.updateEmployment = asyncHandler(async (req, res, next) => {
  const employment = await Employment.findByIdAndUpdate(
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
    data: employment,
  });
});

// @desc      Delete employment
// @route     DELETE /api/v1/employment/:id
// @access    Private/Admin
exports.deleteEmployment = asyncHandler(async (req, res, next) => {
  await Employment.findByIdAndDelete(req.params.id);
  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
