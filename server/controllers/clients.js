const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Client = require("../models/Client");

// @desc      Get all clients
// @route     GET /api/v1/clients
// @access    Private/Admin
exports.getClients = asyncHandler(async (req, res, next) => {
  const clients = await Client.find(
    {},
    { entityName: 1, phone: 1, website: 1 }
  );
  res.status(200).json({ code: "200", message: "", data: clients });
});

// @desc      Get single client
// @route     GET /api/v1/clients/:id
// @access    Private/Admin
exports.getClient = asyncHandler(async (req, res, next) => {
  const client = await Client.findById(req.params.id, {
    entityName: 1,
    phone: 1,
    website: 1,
  });
  res.status(200).json({
    code: "200",
    message: "",
    data: client,
  });
});

// @desc      Create client
// @route     POST /api/v1/clients
// @access    Private/Admin
exports.createClient = asyncHandler(async (req, res, next) => {
  const {
    entityName,
    dba,
    tradeName,
    ein,
    phone,
    fax,
    website,
    llcManagement,
    taxType,
    secrateryOfStateNumber,
    stateOfInformation,
    annualCalenderYearFermentation,
    annualCalenderYearProduction,
    fiscalYearEndDate,
    operation,
    hostWinery,
    service,
    dhwcSpecialist,
    bankName,
    account,
    address,
    country,
    state,
    city,
    zipCode,
  } = req.body;

  await Client.create({
    entityName,
    dba,
    tradeName,
    ein,
    phone,
    fax,
    website,
    ...(llcManagement && { llcManagement: llcManagement._id }),
    ...(taxType && { taxType: taxType._id }),
    secrateryOfStateNumber,
    stateOfInformation,
    annualCalenderYearFermentation,
    annualCalenderYearProduction,
    fiscalYearEndDate,
    ...(operation && { operation: operation._id }),
    hostWinery,
    ...(service && { service: service._id }),
    ...(dhwcSpecialist && { dhwcSpecialist: dhwcSpecialist._id }),
    bankInformation: {
      bankName,
      account,
      address,
      ...(country && { country: country._id }),
      ...(state && { state: state._id }),
      city,
      zipCode,
    },
  });

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update client
// @route     PUT /api/v1/clients/:id
// @access    Private/Admin
exports.updateClient = asyncHandler(async (req, res, next) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    code: "200",
    message: "Updated Successfully",
    data: client,
  });
});

// @desc      Delete client
// @route     DELETE /api/v1/clients/:id
// @access    Private/Admin
exports.deleteClient = asyncHandler(async (req, res, next) => {
  await Client.findByIdAndDelete(req.params.id);

  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
