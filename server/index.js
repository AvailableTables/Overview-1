var express = require('express');
var axios = require('axios');
var body = require('body-parser');
var app = express();
var model = require('./models/overviewModel.js');
var path = require('path')

app.use(body.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

const overviewRoutes = require('./routes/overviewRoutes.js');

app.use('/restaurants', overviewRoutes);

app.listen(3010, function() {
  console.log('listening on port 3010!')
})