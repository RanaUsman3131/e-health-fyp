const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const City = require("../models/City");

// @desc      Get all city
// @route     GET /api/v1/city
// @access    Private/Admin
exports.getCities = asyncHandler(async (req, res, next) => {
  const cities = await City.find({});
  res.status(200).json({
    code: "200",
    message: "",
    data: cities,
  });
});

// @desc      Get single city
// @route     GET /api/v1/city/:id
// @access    Private/Admin
exports.getCity = asyncHandler(async (req, res, next) => {
  const city = await City.findById(req.params.id);

  res.status(200).json({
    code: "200",
    message: "",
    data: city,
  });
});

// @desc      Create city
// @route     POST /api/v1/city
// @access    Private/Admin
exports.createCity = asyncHandler(async (req, res, next) => {
  await City.create(req.body);

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update city
// @route     PUT /api/v1/city/:id
// @access    Private/Admin
exports.updateCity = asyncHandler(async (req, res, next) => {
  const city = await City.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    code: "200",

    message: "Updated Successfully",
    data: city,
  });
});

// @desc      Delete city
// @route     DELETE /api/v1/city/:id
// @access    Private/Admin
exports.deleteCity = asyncHandler(async (req, res, next) => {
  await City.findByIdAndDelete(req.params.id);
  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
