const mongoose = require("mongoose");

const MaritalStatusSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  {
    versionkey: false,
    id: false,
    collection: "MaritalStatus",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("MaritalStatus", MaritalStatusSchema);
