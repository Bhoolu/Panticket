//IF YOU DONT PRACTICE YOU WILL NOT GET IT

const express = require("express");
const mongoose = require("mongoose");

const {
  CreateOrganiser,
  getOrganiser,
  getOrganiserById,
  updateOrganiser,
  deleteOrganiser,
} = require("./controller/organiser.controller");
const {
  CreateTicket,
  getTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
} = require("./controller/ticket.controller");
const {
  CreateEvent,
  getEvent,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("./controller/event.controller");

const server = express();
const PORT = 3000;

server.use(express.json());

//create anew organiser
server.post("/organiser", CreateOrganiser);

//get all organisers
server.get("/organiser", getOrganiser);

//get organiser by id
server.get("/organiser/:id", getOrganiserById);

//update organiser
server.put("/organiser/:id", updateOrganiser);

//delete organiser
server.delete("/organiser/:id", deleteOrganiser);

//create new tickets
server.post("/ticket", CreateTicket);

//get all tickets
server.get("/ticket", getTicket);

//get ticket by id
server.get("/ticket/:id", getTicketById);

//update ticket
server.put("/ticket/:id", updateTicket);

//delete ticket
server.delete("/ticket/:id", deleteTicket);

//create new event
server.post("/event", CreateEvent);

//get all event
server.get("/event", getEvent);

//get event by id
server.get("/event/:id", getEventById);

//update event
server.put("/event/:id", updateEvent);

//delete event
server.delete("/event/:id", deleteEvent);

server.all("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

async function main() {
  await mongoose.connect("mongodb://localhost:27017/project");
  console.log("DB connected");
}

server.listen(PORT, () => {
  main().catch((err) => console.log(err));
  console.log("Server listening on port 3000");
});
