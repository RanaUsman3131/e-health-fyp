const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    label: { type: String },
    from: { type: String },
    to: { type: String },
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
    contactId: {
      type: mongoose.Schema.ObjectId,
      ref: "Contact",
    },
    isDefault: { type: Boolean, default: false },
  },
  {
    versionkey: false,
    id: false,
    collection: "Address",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Address", AddressSchema);
