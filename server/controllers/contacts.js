const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Contact = require("../models/Contact");

// @desc      Get all contacts
// @route     GET /api/v1/contacts
// @access    Private/Admin
exports.getContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.find(
    {},
    {
      position: 1,
      contactInformation: 1,
      firstName: 1,
      lastName: 1,
      fullName: 1,
    }
  ).populate("contactType", "name");
  res.status(200).json({ code: "200", message: "", data: contacts });
});

// @desc      Get single contact
// @route     GET /api/v1/contacts/:id
// @access    Private/Admin
exports.getContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id)
    .populate("contactType", "name field")
    .populate({
      path: "client",
      model: "Client",
      select: { _id: 1, entityName: 1, website: 1, phone: 1 },
    })
    .populate({
      path: "additionalContactInformation.countryIssued",
      model: "Country",
      select: { _id: 1, name: 1 },
    })
    .populate({
      path: "additionalContactInformation.stateIssued",
      model: "State",
      select: { _id: 1, name: 1 },
    })
    .populate({
      path: "maritalInformation.maritalStatus",
      model: "MaritalStatus",
      select: { _id: 1, name: 1 },
    })
    .populate("sal", "name");
  res.status(200).json({
    code: "200",
    message: "",
    data: contact,
  });
});

// @desc      Create contact
// @route     POST /api/v1/contacts
// @access    Private/Admin
exports.createContact = asyncHandler(async (req, res, next) => {
  const {
    contactType,
    client,
    position,
    agency,
    location,
    sal,
    firstName,
    lastName,
    ttbPQ,
    email,
    workPhone,
    cellPhone,
    homePhone,
    notes,
    socialSecurityNumber,
    driverLicenseNumber,
    countryIssued,
    stateIssued,
    usCitizen,
    placeOfBirth,
    dateOfBirth,
    height,
    weight,
    eyeColor,
    hairColor,
    maritalStatus,
    spouseFullName,
    marriageDate,
    marriageCountry,
    marriageState,
    marriageCity,
    question_1,
    question_2,
    question_3,
  } = req.body;

  await Contact.create({
    ...(contactType && { contactType: contactType._id }),
    ...(client && { client: client._id }),
    position,
    ...(agency && { agency: agency._id }),
    ...(location && { location: location._id }),
    ...(sal && { sal: sal._id }),
    firstName,
    lastName,
    ttbPQ,
    contactInformation: {
      email,
      workPhone,
      cellPhone,
      homePhone,
      notes,
    },
    additionalContactInformation: {
      socialSecurityNumber,
      driverLicenseNumber,
      ...(countryIssued && { countryIssued: countryIssued._id }),
      ...(stateIssued && { stateIssued: stateIssued._id }),
      usCitizen,
      placeOfBirth,
      dateOfBirth,
      height,
      weight,
      eyeColor,
      hairColor,
    },
    maritalInformation: {
      ...(maritalStatus && { maritalStatus: maritalStatus._id }),
      spouseFullName,
      marriageDate,
      ...(marriageCountry && { marriageCountry: marriageCountry._id }),
      ...(marriageState && { marriageState: marriageState._id }),
      marriageCity,
    },
    questionnaire: {
      question_1,
      question_2,
      question_3,
    },
  });

  res.status(201).json({
    code: "201",
    message: "Created Successfully",
    data: "",
  });
});

// @desc      Update contact
// @route     PUT /api/v1/contacts/:id
// @access    Private/Admin
exports.updateContact = asyncHandler(async (req, res, next) => {
  const {
    contactType,
    client,
    position,
    agency,
    location,
    sal,
    firstName,
    lastName,
    ttbPQ,
    email,
    workPhone,
    cellPhone,
    homePhone,
    notes,
    socialSecurityNumber,
    driverLicenseNumber,
    countryIssued,
    stateIssued,
    usCitizen,
    placeOfBirth,
    dateOfBirth,
    height,
    weight,
    eyeColor,
    hairColor,
    maritalStatus,
    spouseFullName,
    marriageDate,
    marriageCountry,
    marriageState,
    marriageCity,
    question_1,
    question_2,
    question_3,
  } = req.body;

  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    {
      ...(contactType && { contactType: contactType._id }),
      ...(client && { client: client._id }),
      position,
      ...(agency && { agency: agency._id }),
      ...(location && { location: location._id }),
      ...(sal && { sal: sal._id }),
      firstName,
      lastName,
      ttbPQ,
      contactInformation: {
        email,
        workPhone,
        cellPhone,
        homePhone,
        notes,
      },
      additionalContactInformation: {
        socialSecurityNumber,
        driverLicenseNumber,
        ...(countryIssued && { countryIssued: countryIssued._id }),
        ...(stateIssued && { stateIssued: stateIssued._id }),
        usCitizen,
        placeOfBirth,
        dateOfBirth,
        height,
        weight,
        eyeColor,
        hairColor,
      },
      maritalInformation: {
        ...(maritalStatus && { maritalStatus: maritalStatus._id }),
        spouseFullName,
        marriageDate,
        ...(marriageCountry && { marriageCountry: marriageCountry._id }),
        ...(marriageState && { marriageState: marriageState._id }),
        marriageCity,
      },
      questionnaire: {
        question_1,
        question_2,
        question_3,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    code: "200",
    message: "Updated Successfully",
    data: contact,
  });
});

// @desc      Delete contact
// @route     DELETE /api/v1/contacts/:id
// @access    Private/Admin
exports.deleteContact = asyncHandler(async (req, res, next) => {
  await Contact.findByIdAndDelete(req.params.id);

  res.status(200).json({
    code: "200",
    message: "Deleted Successfully",
    data: {},
  });
});
