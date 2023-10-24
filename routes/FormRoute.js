const express = require("express");
const router = express.Router();
const Project = require("../model/Project");
const Resume = require("../model/resume");
const jsonData = require("../data");
router.get("/get-all", async (req, res) => {
  const projects = await Project.find({});
  //   console.log(projects);
  return res.render("Project", {
    project: projects,
  });
});
router.get("/", (req, res) => {
  res.render("Home");
});
router.post("/add", async (req, res) => {
  const { title, description, projectLink, image, category } = req.body;
  const project = new Project({
    title,
    description,
    projectLink,
    image,
    category,
  });
  project.save();

  return res.render("Home");
});
router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Project.findByIdAndDelete(id);
  return res.render("Home");
});

router.post("/resume", (req, res) => {
  const { link } = req.body;
  const resume = new Resume({
    link,
  });
  resume.save();
  return res.render("Home");
});
router.get("/resume", (req, res) => {
  res.render("Resume");
});


router.get("/get-resume", async (req, res) => {
  const resumeLink = await Resume.find({});
  return res.status(200).json({
    resume: resumeLink,
  });
});

router.get("/get-data", async (req, res) => {
  const projects = await Project.find({});
  return res.status(200).json({
    projects: projects,
  });
});
//

module.exports = router;
