const express = require('express');
const app = express();
const router = require('./routes/routers')
const mongoose = require('./db/db')
const port = 5000;

app.use(express.json());
app.use('/', router)
app.listen(port, async () => {
  await mongoose;
  console.log(`Server listening on port ${port}`);
});