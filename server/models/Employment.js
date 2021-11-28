const mongoose = require("mongoose");

const EmploymentSchema = new mongoose.Schema(
  {
    jobTitle: { type: String },
    companyName: { type: String },
    city: { type: String },
    from: { type: String },
    to: { type: String },
    contactId: {
      type: mongoose.Schema.ObjectId,
      ref: "Contact",
    },
    isCurrentEmployment: { type: Boolean, default: false },
  },
  {
    versionkey: false,
    id: false,
    collection: "Employment",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Employment", EmploymentSchema);
