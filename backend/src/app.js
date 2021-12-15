const { urlencoded, json } = require("express");
const express = require("express");
const morgan = require("morgan");
const app = express();

const index = require("./routes/index");

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan("combined"));

app.use("/", index);

module.exports = app;