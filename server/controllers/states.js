const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const State = require("../models/State");

// @desc      Get all state
// @route     GET /api/v1/state
// @access    Private/Admin
exports.getStates = asyncHandler(async (req, res, next) => {
  let states = [];
  if (!req.query.country_id) {
    states = await State.find({}, { name: 1 });
    return res.status(200).json({ code: "200", message: "", data: states });
  }
  states = await State.find(
    { country: req.query.country_id },
    { name: 1 }
  ).populate("country", "name");
  res.status(200).json({ code: "200", message: "", data: states });
});

// @desc      Get single state
// @route     GET /api/v1/states/:id
// @access    Private/Admin
exports.getState = asyncHandler(async (req, res, next) => {
  const state = await State.findById(req.params.id);

  res.status(200).json({
    code: "200",

    data: state,
  });
});

// @desc      Create state
// @route     POST /api/v1/state
// @access    Private/Admin
exports.createState = asyncHandler(async (req, res, next) => {
  await State.create(req.body);

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update state
// @route     PUT /api/v1/states/:id
// @access    Private/Admin
exports.updateState = asyncHandler(async (req, res, next) => {
  const state = await State.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    code: "200",
    message: "Updated Successfully",
    data: state,
  });
});

// @desc      Delete state
// @route     DELETE /api/v1/states/:id
// @access    Private/Admin
exports.deleteState = asyncHandler(async (req, res, next) => {
  await State.findByIdAndDelete(req.params.id);

  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
