const Event = require("../model/event.model");

//create a new event
async function CreateEvent(req, res) {
  try {
    const event = new Event(req.body);

    await event.save();

    res.status(200).json({
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    console.log(error);
  }
}

//get all event

async function getEvent(req, res) {
  try {
    const event = await Event.find({});
    res.status(200).json({
      message: "Event found successfully",
      event,
    });
  } catch (error) {
    console.log(error);
  }
}

//get event by id

async function getEventById(req, res) {
  const eventId = req.params.id;
  const event = await Event.findById(eventId)
    .populate("ticket")
    .populate("organiser")
    .exec();

  if (event) {
    res.status(200).json({
      message: "Event gotten by id",
      event: event,
    });
  } else {
    res.status(404).json({
      message: "event not found",
    });
  }
}

//update event by id

async function updateEvent(req, res) {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });

  if (event) {
    res.status(200).json({
      message: "Event updated by id",
      event: event,
    });
  } else {
    res.status(404).json({
      message: "event not found",
    });
  }
}

//delete event

async function deleteEvent(req, res) {
  const event = await Event.findByIdAndDelete(req.params.id);

  if (event) {
    res.status(200).json({
      message: "Event deleted successfully",
      event,
    });
  } else {
    res.status(404).json({
      message: "Event not found",
    });
  }
}
module.exports = {
  CreateEvent,
  getEvent,
  getEventById,
  updateEvent,
  deleteEvent,
};
