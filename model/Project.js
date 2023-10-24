const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Django", "Mern", "HTML/CSS", "React"],
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
