const express = require("express");
const path = require("path")
const consign = require('consign')
require('dotenv').config();
require('express-async-errors')
var bodyParser = require('body-parser')


const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

consign({
  cwd: path.join(__dirname),
})
  .include('infra/http/routes')
  .then('infra/core/boot.js')
  .into(app);
