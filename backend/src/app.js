const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongooseConnection = require("./config/mogooseConnection");

const app = express();

const index = require("./routes/index");
const userRoutes = require("./routes/UserRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));

app.set("mongoose connection", mongooseConnection);

app.use(index);
app.use("/api/",userRoutes);

module.exports = app;
