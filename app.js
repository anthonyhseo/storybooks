const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('It works');
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});