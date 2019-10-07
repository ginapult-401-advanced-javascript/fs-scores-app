'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const scoreRouter = require('../routes/scores.js');

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(scoreRouter);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Success! Scores App server up on ${port}`);
    });
  },
};
