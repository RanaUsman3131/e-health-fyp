const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const DHWC_Specialist = require("../models/DHWC_Specialist");

// @desc      Get all dhwc_specialist
// @route     GET /api/v1/dhwc_specialist
// @access    Private/Admin
exports.getDHWC_Specialists = asyncHandler(async (req, res, next) => {
  const dhwcSpecialist = await DHWC_Specialist.find({});
  res.status(200).json({ code: "200", message: "", data: dhwcSpecialist });
});

// @desc      Get single dhwc_specialist
// @route     GET /api/v1/dhwc_specialist/:id
// @access    Private/Admin
exports.getDHWC_Specialist = asyncHandler(async (req, res, next) => {
  const dhwc_specialist = await DHWC_Specialist.findById(req.params.id);

  res.status(200).json({
    code: "200",

    data: dhwc_specialist,
  });
});

// @desc      Create dhwc_specialist
// @route     POST /api/v1/dhwc_specialist
// @access    Private/Admin
exports.createDHWC_Specialist = asyncHandler(async (req, res, next) => {
  await DHWC_Specialist.create(req.body);

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update dhwc_specialist
// @route     PUT /api/v1/dhwc_specialist/:id
// @access    Private/Admin
exports.updateDHWC_Specialist = asyncHandler(async (req, res, next) => {
  const dhwc_specialist = await DHWC_Specialist.findByIdAndUpdate(
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
    data: dhwc_specialist,
  });
});

// @desc      Delete dhwc_specialist
// @route     DELETE /api/v1/dhwc_specialist/:id
// @access    Private/Admin
exports.deleteDHWC_Specialist = asyncHandler(async (req, res, next) => {
  await DHWC_Specialist.findByIdAndDelete(req.params.id);

  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
