const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const mongoDB=require("./db")
mongoDB();

app.use(express.json())

const multer = require('multer');
const { createWorker } = require('tesseract.js');
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use('/api', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})









