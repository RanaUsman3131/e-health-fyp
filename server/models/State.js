const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    country: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
      required: true,
    },
  },
  {
    versionkey: false,
    id: false,
    collection: "State",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("State", StateSchema);
