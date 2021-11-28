const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    contactType: {
      type: mongoose.Schema.ObjectId,
      ref: "ContactType",
    },
    client: {
      type: mongoose.Schema.ObjectId,
      ref: "Client",
    },
    position: { type: String },
    agency: {
      type: mongoose.Schema.ObjectId,
      ref: "Agency",
      default: null,
    },
    location: {
      type: mongoose.Schema.ObjectId,
      ref: "Location",
      default: null,
    },
    sal: {
      type: mongoose.Schema.ObjectId,
      ref: "Sal",
    },
    firstName: { type: String },
    lastName: { type: String },
    ttbPQ: { type: String },
    contactInformation: {
      email: { type: String },
      workPhone: { type: String },
      cellPhone: { type: String },
      homePhone: { type: String },
      notes: { type: String },
    },
    additionalContactInformation: {
      socialSecurityNumber: { type: String },
      driverLicenseNumber: { type: String },
      countryIssued: {
        type: mongoose.Schema.ObjectId,
        ref: "Country",
      },
      stateIssued: {
        type: mongoose.Schema.ObjectId,
        ref: "State",
      },
      usCitizen: { type: Boolean },
      placeOfBirth: { type: String },
      dateOfBirth: { type: String },
      height: { type: String },
      weight: { type: String },
      eyeColor: { type: String },
      hairColor: { type: String },
    },
    maritalInformation: {
      maritalStatus: {
        type: mongoose.Schema.ObjectId,
        ref: "MaritalStatus",
      },
      spouseFullName: { type: String },
      marriageDate: { type: String },
      marriageCountry: {
        type: mongoose.Schema.ObjectId,
        ref: "Country",
      },
      marriageState: {
        type: mongoose.Schema.ObjectId,
        ref: "State",
      },
      marriageCity: {
        type: String,
      },
    },
    questionnaire: {
      question_1: { type: Boolean },
      question_2: { type: Boolean },
      question_3: { type: Boolean },
    },
  },
  {
    versionkey: false,
    id: false,
    collection: "Contact",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
ContactSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("Contact", ContactSchema);
