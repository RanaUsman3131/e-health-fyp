const mongoose = require("mongoose");

const LLC_ManagementSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  {
    versionkey: false,
    id: false,
    collection: "LLC_Management",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("LLC_Management", LLC_ManagementSchema);
