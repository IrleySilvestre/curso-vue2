const { urlencoded, json } = require("express");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const mongooseConnection = require("./config/mogooseConnection");

const app = express();

const index = require("./routes/index");
const userRoutes = require("./routes/UserRoutes");

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(json({ type: "appication/vns.api+json" }));
app.use(morgan("dev"));
app.use(cors());

app.set("mongoose connection", mongooseConnection);

app.use(index);
app.use(userRoutes);

module.exports = app;
