const mongoose = require("mongoose");

const ContactTypeSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  {
    versionkey: false,
    id: false,
    collection: "ContactType",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("ContactType", ContactTypeSchema);
