const nr = require('newrelic');
const express = require('express');
const axios = require('axios');
const body = require('body-parser');
const app = express();
const model = require('./models/overviewModel.js');
const path = require('path')
const compression = require('compression')
app.use(compression());
app.use(body.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

const overviewRoutes = require('./routes/overviewRoutes.js');

// app.use('/', overviewRoutes);

app.listen(3010, function() {
  console.log('listening on port 3010!')
})


