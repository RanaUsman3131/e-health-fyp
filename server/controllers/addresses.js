const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Address = require("../models/Address");

// @desc      Get all addresses
// @route     GET /api/v1/addresses
// @route     GET /api/v1/contacts/:contactId/addresses
// @access    Private/Admin
exports.getAddresses = asyncHandler(async (req, res, next) => {
  let filter = {};
  let required = {
    label: 1,
    address: 1,
    country: 0,
    state: 0,
  };
  if (req.params.contactId) {
    filter = {
      contact: req.params.contactId,
    };
    required = {};
  }
  const addresses = await Address.find(filter, required)
    .populate("country", "name")
    .populate("state", "name");
  res.status(200).json({
    code: "200",
    message: "",
    data: addresses,
  });
});

// @desc      Get single addresses
// @route     GET /api/v1/addresses/:id
// @access    Private/Admin
exports.getAddress = asyncHandler(async (req, res, next) => {
  const addresses = await Address.findById(req.params.id)
    .populate("country", "name")
    .populate("state", "name");

  res.status(200).json({
    code: "200",
    message: "",
    data: addresses,
  });
});

// @desc      Create addresses
// @route     POST /api/v1/addresses
// @access    Private/Admin
exports.createAddress = asyncHandler(async (req, res, next) => {
  await Address.create(req.body);

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update addresses
// @route     PUT /api/v1/addresses/:id
// @access    Private/Admin
exports.updateAddress = asyncHandler(async (req, res, next) => {
  const addresses = await Address.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    code: "200",

    message: "Updated Successfully",
    data: addresses,
  });
});

// @desc      Delete addresses
// @route     DELETE /api/v1/addresses/:id
// @access    Private/Admin
exports.deleteAddress = asyncHandler(async (req, res, next) => {
  await Address.findByIdAndDelete(req.params.id);
  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
