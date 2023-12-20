const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const TicketSchema = mongoose.Schema(
  {
    ticket: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },

    quantity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
