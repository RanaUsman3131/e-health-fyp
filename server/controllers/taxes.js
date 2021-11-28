const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Tax = require("../models/Tax");

// @desc      Get all tax
// @route     GET /api/v1/tax
// @access    Private/Admin
exports.getTaxes = asyncHandler(async (req, res, next) => {
  const taxes = await Tax.find({});
  res.status(200).json({ code: "200", message: "", data: taxes });
});

// @desc      Get single tax
// @route     GET /api/v1/tax/:id
// @access    Private/Admin
exports.getTax = asyncHandler(async (req, res, next) => {
  const tax = await Tax.findById(req.params.id);

  res.status(200).json({
    code: "200",
    message: "",
    data: tax,
  });
});

// @desc      Create tax
// @route     POST /api/v1/tax
// @access    Private/Admin
exports.createTax = asyncHandler(async (req, res, next) => {
  await Tax.create(req.body);

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update tax
// @route     PUT /api/v1/tax/:id
// @access    Private/Admin
exports.updateTax = asyncHandler(async (req, res, next) => {
  const tax = await Tax.findByIdAndUpdate(req.params.id, req.body, {
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
exports.deleteTax = asyncHandler(async (req, res, next) => {
  await Tax.findByIdAndDelete(req.params.id);

  res.status(200).json({
    code: "200",

    message: "Deleted Successfully",
    data: {},
  });
});
