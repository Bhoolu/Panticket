const { Schema } = require("mongoose");

const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    eventname: {
      type: String,
      required: true,
    },

    ticket: [{ type: Schema.Types.ObjectId, ref: "Ticket", required: true }],
    organiser: {
      type: Schema.Types.ObjectId,
      ref: "Organiser",
      required: true,
    },
    eventdescription: {
      type: String,
      required: true,
    },
    dateandtime: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      required: true,
    },

    featuredevent: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
