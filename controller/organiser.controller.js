const Organiser = require("../model/organiser.model");

//create a new organiser

async function CreateOrganiser(req, res) {
  try {
    const organiser = new Organiser(req.body);

    await organiser.save();

    res.status(200).json({
      message: "Organiser created successfully",
      organiser,
    });
  } catch (error) {
    console.log(error);
  }
}

//get all organisers

async function getOrganiser(req, res) {
  try {
    const organiser = await Organiser.find({});

    res.status(200).json({
      message: "Organiser found successfully",
      organiser,
    });
  } catch (error) {
    console.log(error);
  }
}

//get organiser by id

async function getOrganiserById(req, res) {
  const organiserId = req.params.id;
  const organiser = await Organiser.findById(organiserId);

  if (organiser) {
    res.status(200).json({
      message: "Organiser gotten by id",
      organiser: organiser,
    });
  } else {
    res.status(404).json({
      message: "organiser not found",
    });
  }
}

//update organiser by id

async function updateOrganiser(req, res) {
  const organiser = await Organiser.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });

  if (organiser) {
    res.status(200).json({
      message: "Organiser updated by id",
      organiser: organiser,
    });
  } else {
    res.status(404).json({
      message: "organiser not found",
    });
  }
}

//delete organiser

async function deleteOrganiser(req, res) {
  const organiser = await Organiser.findByIdAndDelete(req.params.id);

  if (organiser) {
    res.status(200).json({
      message: "Organiser deleted successfully",
      organiser,
    });
  } else {
    res.status(404).json({
      message: "Organiser not found",
    });
  }
}
module.exports = {
  CreateOrganiser,
  getOrganiser,
  getOrganiserById,
  updateOrganiser,
  deleteOrganiser,
};
