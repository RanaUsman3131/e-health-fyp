const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  {
    versionkey: false,
    id: false,
    collection: "Country",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Country", CountrySchema);
