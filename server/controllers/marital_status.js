const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const MaritalStatus = require("../models/MaritalStatus");

// @desc      Get all marital_status
// @route     GET /api/v1/marital_status
// @access    Private/Admin
exports.getMaritalStatuses = asyncHandler(async (req, res, next) => {
  const maritalStatues = await MaritalStatus.find({});
  res.status(200).json({ code: "200", message: "", data: maritalStatues });
});

// @desc      Get single marital_status
// @route     GET /api/v1/marital_status/:id
// @access    Private/Admin
exports.getMaritalStatus = asyncHandler(async (req, res, next) => {
  const marital_status = await MaritalStatus.findById(req.params.id);

  res.status(200).json({
    code: "200",
    message: "",
    data: marital_status,
  });
});

// @desc      Create marital_status
// @route     POST /api/v1/marital_status
// @access    Private/Admin
exports.createMaritalStatus = asyncHandler(async (req, res, next) => {
  await MaritalStatus.create(req.body);

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update marital_status
// @route     PUT /api/v1/marital_status/:id
// @access    Private/Admin
exports.updateMaritalStatus = asyncHandler(async (req, res, next) => {
  const marital_status = await MaritalStatus.findByIdAndUpdate(
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
    data: marital_status,
  });
});

// @desc      Delete marital_status
// @route     DELETE /api/v1/marital_status/:id
// @access    Private/Admin
exports.deleteMaritalStatus = asyncHandler(async (req, res, next) => {
  await MaritalStatus.findByIdAndDelete(req.params.id);

  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
