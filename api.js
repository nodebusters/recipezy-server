const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.load()

const Ingredient = require('./models/Ingredient');

const app = express();
const port = 5000;

const driver = process.env.MONGO_USER_DETAILS;

mongoose.connect(driver)

mongoose.connection.on('connected', () => {
  console.log('Connected to mongod')
})

mongoose.connection.on('error', () => {
  console.log('Failed to connect to mongod')
})

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  Ingredient.find({})
    .then(doc => {
      return res.send(doc)
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})