const mongoose = require("mongoose");

const organiserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    descriptions: {
      type: String,
      required: true,
    },

    phonenumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    twitter: {
      type: String,
      required: true,
    },

    facebook: {
      type: String,
      required: true,
    },

    instagram: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Organiser = mongoose.model("Organiser", organiserSchema);

module.exports = Organiser;
