const Ticket = require("../model/ticket.model");

//create a new Ticket
async function CreateTicket(req, res) {
  try {
    const ticket = new Ticket(req.body);

    await ticket.save();

    res.status(200).json({
      message: "New ticket created successfully",
      ticket,
    });
  } catch (error) {
    console.log(error);
  }
}

//get all tickets
async function getTicket(req, res) {
  try {
    const ticket = await Ticket.find({});

    res.status(200).json({
      message: "All ticket gotten successfully",
      ticket,
    });
  } catch (error) {
    console.log(error);
  }
}

//get ticket by id
async function getTicketById(req, res) {
  const ticketId = req.params.id;
  const ticket = await Ticket.findById(ticketId);

  if (ticket) {
    res.status(200).json({
      messge: "Ticket get by Id",
      ticket,
    });
  } else {
    res.status(404).json({
      message: "No Ticket Found",
    });
  }
}

//update ticket by id
async function updateTicket(req, res) {
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body);
  returnDocument: "after";
  if (ticket) {
    res.status(200).json({
      messge: "Ticket updated successfully",
      ticket,
    });
  } else {
    res.status(404).json({
      message: "No Ticket updated",
    });
  }
}

//delete the ticket
async function deleteTicket(req, res) {
  const ticket = await Ticket.findByIdAndDelete(req.params.id);

  if (ticket) {
    res.status(200).json({
      messge: "Ticket deleted successfully",
      ticket,
    });
  } else {
    res.status(404).json({
      message: "No Ticket found",
    });
  }
}
module.exports = {
  CreateTicket,
  getTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
};
