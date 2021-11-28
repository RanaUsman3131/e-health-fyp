const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    entityName: { type: String },
    dba: { type: String },
    tradeName: { trype: String },
    ein: { type: String },
    phone: { type: String },
    fax: { type: String },
    website: { type: String },
    llcManagement: {
      type: mongoose.Schema.ObjectId,
      ref: "LLC_Management",
    },
    taxType: {
      type: mongoose.Schema.ObjectId,
      ref: "Tax",
    },
    secrateryOfStateNumber: { type: String },
    stateOfInformation: { type: String },
    annualCalenderYearFermentation: { type: Number },
    annualCalenderYearProduction: { type: Number },
    fiscalYearEndDate: { type: String },
    operation: {
      type: mongoose.Schema.ObjectId,
      ref: "Operation",
    },
    hostWinery: { type: String },
    service: {
      type: mongoose.Schema.ObjectId,
      ref: "Service",
    },
    dhwcSpecialist: {
      type: mongoose.Schema.ObjectId,
      ref: "DHWC_Specialist",
    },
    bankInformation: {
      bankName: { type: String },
      account: { type: String },
      address: { type: String },
      country: {
        type: mongoose.Schema.ObjectId,
        ref: "Country",
      },
      state: {
        type: mongoose.Schema.ObjectId,
        ref: "State",
      },
      city: { type: String },
      zipCode: { type: String },
    },
  },
  {
    versionkey: false,
    id: false,
    collection: "Client",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Client", ClientSchema);
