const express = require('express')
const app = express()
const port = 3000
// const app = require('./app'); // Change the path to your 'app.js' file
const mongoose = require("mongoose")
require('dotenv').config()
// const port = process.env.SERVER_PORT


app.use(express.json());
app.use('/api', require('./api/users/router'))
// app.use('/api', require('./api/products/Router'))


// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL,
    {

    })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





