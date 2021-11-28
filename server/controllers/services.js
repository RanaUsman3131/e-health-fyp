const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Service = require("../models/Service");

// @desc      Get all service
// @route     GET /api/v1/service
// @access    Private/Admin
exports.getServices = asyncHandler(async (req, res, next) => {
  const services = await Service.find({});
  res.status(200).json({ code: "200", message: "", data: services });
});

// @desc      Get single service
// @route     GET /api/v1/service/:id
// @access    Private/Admin
exports.getService = asyncHandler(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  res.status(200).json({
    code: "200",
    message: "",
    data: service,
  });
});

// @desc      Create service
// @route     POST /api/v1/service
// @access    Private/Admin
exports.createService = asyncHandler(async (req, res, next) => {
  await Service.create(req.body);

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update service
// @route     PUT /api/v1/service/:id
// @access    Private/Admin
exports.updateService = asyncHandler(async (req, res, next) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    code: "200",
    message: "Updated Successfully",
    data: service,
  });
});

// @desc      Delete service
// @route     DELETE /api/v1/service/:id
// @access    Private/Admin
exports.deleteService = asyncHandler(async (req, res, next) => {
  await Service.findByIdAndDelete(req.params.id);

  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
