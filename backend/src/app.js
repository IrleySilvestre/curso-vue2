const { urlencoded, json } = require("express");
const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

const dataBase = require('./config/db')

mongoose.Promise = global.Promise

mongoose.connect(dataBase.local.localDatabaseUrl, 
    { useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('Base de dados conected')}, 
    (err) => { console.log(`Ocorreu um erro na conexao: ${err}`) }
)

const index = require("./routes/index");

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(json({ type: 'appication/vns.api+json' }));
app.use(morgan("dev"));
app.use(cors());

app.use(index);

module.exports = app;