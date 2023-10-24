const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// database
require("./db");

app.use("/", require("./routes/FormRoute"));

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
