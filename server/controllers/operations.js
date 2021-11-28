const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Operation = require("../models/Operation");

// @desc      Get all operation
// @route     GET /api/v1/operation
// @access    Private/Admin
exports.getOperations = asyncHandler(async (req, res, next) => {
  const operations = await Operation.find({});
  res.status(200).json({ code: "200", message: "", data: operations });
});

// @desc      Get single operation
// @route     GET /api/v1/operation/:id
// @access    Private/Admin
exports.getOperation = asyncHandler(async (req, res, next) => {
  const operation = await Operation.findById(req.params.id);

  res.status(200).json({
    code: "200",

    data: operation,
  });
});

// @desc      Create operation
// @route     POST /api/v1/operation
// @access    Private/Admin
exports.createOperation = asyncHandler(async (req, res, next) => {
  await Operation.create(req.body);

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update operation
// @route     PUT /api/v1/operation/:id
// @access    Private/Admin
exports.updateOperation = asyncHandler(async (req, res, next) => {
  const operation = await Operation.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    code: "200",
    message: "Updated Successfully",
    data: operation,
  });
});

// @desc      Delete operation
// @route     DELETE /api/v1/operation/:id
// @access    Private/Admin
exports.deleteOperation = asyncHandler(async (req, res, next) => {
  await Operation.findByIdAndDelete(req.params.id);

  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
