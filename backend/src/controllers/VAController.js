const VirtualAssistant = require("../models/VAModel");
const bcrypt = require("bcrypt");

exports.addVA = async (req, res) => {
  try {
    const { answers, data } = req.body;

    // Create a new instance of the VirtualAssistant model with the received data
    const newVA = new VirtualAssistant({
      // Map questionnaire answers to the corresponding fields in the Mongoose model
      professionalExperience: answers[0][0], // Assumes it's the first item in the first array
      technicalSkills: answers[1], // Array of technical skills
      taskCompetency: answers[2],
      industryFamiliarity: answers[3][0],
      education: answers[4][0],
      writtenEnglishProficiency: answers[5][0],
      workSchedule: answers[6][0],
      workingTimeFrames: answers[7],
      teamworkPreference: answers[8][0],
      budgetPreference: answers[9][0],
      budgetFlexibility: answers[10][0],
      culturalFit: answers[11],
      servicesProvided: answers[12],

      fullname: data.fullname,
      email: data.email,
      location: data.location,
      password: data.password,
      phone: data.phone,
      username: data.username,
    });

    await newVA.save();

    res.status(201).json({ message: "Virtual Assistant added successfully" });
  } catch (error) {
    console.error("Error adding Virtual Assistant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
