const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const LLC_Management = require("../models/LLC_Management");

// @desc      Get all llc_management
// @route     GET /api/v1/llc_management
// @access    Private/Admin
exports.getLLC_Managements = asyncHandler(async (req, res, next) => {
  const llcManagement = await LLC_Management.find({});
  res.status(200).json({ code: "200", message: "", data: llcManagement });
});

// @desc      Get single llc_management
// @route     GET /api/v1/llc_management/:id
// @access    Private/Admin
exports.getLLC_Management = asyncHandler(async (req, res, next) => {
  const llc_management = await LLC_Management.findById(req.params.id);

  res.status(200).json({
    code: "200",
    message: "",
    data: llc_management,
  });
});

// @desc      Create llc_management
// @route     POST /api/v1/llc_management
// @access    Private/Admin
exports.createLLC_Management = asyncHandler(async (req, res, next) => {
  await LLC_Management.create(req.body);

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update llc_management
// @route     PUT /api/v1/llc_management/:id
// @access    Private/Admin
exports.updateLLC_Management = asyncHandler(async (req, res, next) => {
  const llc_management = await LLC_Management.findByIdAndUpdate(
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
    data: llc_management,
  });
});

// @desc      Delete llc_management
// @route     DELETE /api/v1/llc_management/:id
// @access    Private/Admin
exports.deleteLLC_Management = asyncHandler(async (req, res, next) => {
  await LLC_Management.findByIdAndDelete(req.params.id);

  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
