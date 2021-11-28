const mongoose = require("mongoose");

const SalSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  {
    versionkey: false,
    id: false,
    collection: "Sal",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Sal", SalSchema);
