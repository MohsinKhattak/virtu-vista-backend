const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VaSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  professionalExperience: {
    type: String,
    enum: [
      "Less than 1 year",
      "1-2 years",
      "2-5 years",
      "5-10 years",
      "Over 10 years",
    ],
  },
  technicalSkills: {
    type: [String],
  },
  taskCompetency: {
    type: [String],
  },
  industryFamiliarity: {
    type: [String],
  },
  education: {
    type: String,
    enum: [
      "High School / Secondary School",
      "Associate's Degree or Equivalent",
      "Bachelor's Degree",
      "Master's Degree or Higher",
      "Vocational/Trade School or Certification",
    ],
  },
  certifications: {
    type: String,
  },
  writtenEnglishProficiency: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced", "Native-level"],
  },
  verbalEnglishProficiency: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced", "Native-level"],
  },
  workSchedule: {
    type: String,
    enum: [
      "Less than 10 hours",
      "10-20 hours",
      "20-30 hours",
      "30-40 hours",
      "40+ hours",
    ],
  },
  workingTimeFrames: {
    type: [String],
  },
  teamworkPreference: {
    type: String,
    enum: [
      "Work Solo",
      "Collaborate with Team",
      "Lead/Manage Tasks",
      "Interact with Clients/Stakeholders",
    ],
  },
  budgetPreference: {
    type: String,
    enum: ["Below $5/hr", "$5-$8/hr", "$8-$12/hr", "$12+/hr"],
  },
  budgetFlexibility: {
    type: String,
  },
  culturalFit: {
    type: [String],
  },
  servicesProvided: {
    type: [String],
  },
});

module.exports = mongoose.model("VirtualAssistant", VaSchema);
