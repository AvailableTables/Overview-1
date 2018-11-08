const axios = require('axios');
const model = require('../models/overviewModel.js')
const path = require('path');

module.exports = {
  get: (req, res) => {
    console.log('in get')
    console.log(req.body)
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  },

  getRestaurant: (req, res) => {
    model.get(req.params.id, (data) => {
  
      console.log('in get restuarant DATA', data)
      res.send(data);
    })
  }
}


