const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Country = require("../models/Country");

// @desc      Get all tax
// @route     GET /api/v1/tax
// @access    Private/Admin
exports.getCountries = asyncHandler(async (req, res, next) => {
  const countries = await Country.find({});
  res.status(200).json({
    code: "200",
    message: "",
    data: countries,
  });
});

// @desc      Get single tax
// @route     GET /api/v1/tax/:id
// @access    Private/Admin
exports.getCountry = asyncHandler(async (req, res, next) => {
  const tax = await Country.findById(req.params.id);
  res.status(200).json({
    code: "200",
    message: "",
    data: tax,
  });
});

// @desc      Create tax
// @route     POST /api/v1/tax
// @access    Private/Admin
exports.createCountry = asyncHandler(async (req, res, next) => {
  await Country.create(req.body);
  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update tax
// @route     PUT /api/v1/tax/:id
// @access    Private/Admin
exports.updateCountry = asyncHandler(async (req, res, next) => {
  const tax = await Country.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    code: "200",
    message: "Updated Successfully",
    data: tax,
  });
});

// @desc      Delete tax
// @route     DELETE /api/v1/tax/:id
// @access    Private/Admin
exports.deleteCountry = asyncHandler(async (req, res, next) => {
  await Country.findByIdAndDelete(req.params.id);

  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
