const mongoose = require("mongoose");

const DHWC_SpecialistSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  {
    versionkey: false,
    id: false,
    collection: "DHWC_Specialist",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("DHWC_Specialist", DHWC_SpecialistSchema);
