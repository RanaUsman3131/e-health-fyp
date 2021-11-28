const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  {
    versionkey: false,
    id: false,
    collection: "City",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("City", CitySchema);
