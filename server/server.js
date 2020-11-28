require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rootRoute = require("./routers");
const { notFoundError, errorHandler } = require('./helpers/errorHandlers');

const { MONGODB_URL, PORT, CLIENT_URL } = process.env;

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors({ origin: CLIENT_URL }));

server.use('/api', rootRoute)

server.use(notFoundError);
server.use(errorHandler);

mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (err) throw err
  console.log('MongoDB connected!');

  server.listen(PORT, () => console.log(`Server run successfully: http://localhost:${PORT}`));
})