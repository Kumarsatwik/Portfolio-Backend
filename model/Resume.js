const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
