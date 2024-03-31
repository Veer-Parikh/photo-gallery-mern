const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const upload = require("./routes/uploadR.js")

const app = express()
app.use(cors())
const port = process.env.PORT || 4600;

app.use(bodyParser.json());
app.use(express.json())
app.use(express.static("public"))

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
          console.log(`Server is running on port ${port}`);
        });
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB', error);
      })

app.use(upload)