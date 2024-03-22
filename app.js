const express = require("express");
require("./config/db");
const cors = require("cors");
const usersRoute = require("./routes/users.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", usersRoute);

app.get("/", (req, res) => {
  res.status(200).send("<h2>This is REST API Home page</h2>");
});

app.get("/api/user", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/form.html");
});

app.use("*", (req, res) => {
  res.status(200).send("<h1>404 NOT FOUND !</h2>");
});

module.exports = app;
