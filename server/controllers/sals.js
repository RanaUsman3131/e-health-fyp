const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Sal = require("../models/Sal");

// @desc      Get all sals
// @route     GET /api/v1/sals
// @access    Private/Admin
exports.getSals = asyncHandler(async (req, res, next) => {
  const sals = await Sal.find({});
  res.status(200).json({ code: "200", message: "", data: sals });
});

// @desc      Get single sal
// @route     GET /api/v1/sals/:id
// @access    Private/Admin
exports.getSal = asyncHandler(async (req, res, next) => {
  const sal = await Sal.findById(req.params.id);

  res.status(200).json({
    code: "200",
    message: "",
    data: sal,
  });
});

// @desc      Create sal
// @route     POST /api/v1/sals
// @access    Private/Admin
exports.createSal = asyncHandler(async (req, res, next) => {
  await Sal.create(req.body);

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update sal
// @route     PUT /api/v1/sals/:id
// @access    Private/Admin
exports.updateSal = asyncHandler(async (req, res, next) => {
  const sal = await Sal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    code: "200",
    message: "Updated Successfully",
    data: sal,
  });
});

// @desc      Delete sal
// @route     DELETE /api/v1/sals/:id
// @access    Private/Admin
exports.deleteSal = asyncHandler(async (req, res, next) => {
  await Sal.findByIdAndDelete(req.params.id);

  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
