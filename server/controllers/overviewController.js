const axios = require('axios');
const model = require('../models/overviewModel.js')
const path = require('path');
// const db = require('../../db/index.js');
var connection = require('../../db/postgresIndex.js')



// const {handleGettingUserId} = require('.../db/methods.js')
module.exports = {
  get: (req, res) => {
    
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
      

  },
//   var props = { title: 'Universal React' };
//   var html = ReactDOMServer.renderToString(
//       React.createElement(Component, props)
//   );
//   response.send(html);
// });

  getRestaurant: (req, res) => {
// console.log("THIS IS A req.params", req.params.id)
// // console.log('this is the ntype of params', typeof(parseInt(req.params.id))


let id = [req.params.id];

connection.query(`SELECT * FROM restaurants.overview WHERE rid =${id}`, (err, data) => {
  if (err) {
      console.log(err);
  } else {
      
      res.send(data.rows[0]);
  }


// connection.query(`SELECT * FROM restaurants.overview WHERE rid =${id}`, (err, data) => {
//   if (err) {
//       console.log(err);
//   } else {
      
//       res.send(ReactDomServer.renderToString(React.createElement(Overview,data.rows[0])));
//   }
});

// model.get(id, (err,data) => {
//   // console.log('DATA',data)
//   console.log("ID", id)
//   if (err){
//     console.log(err);
//   } else {
//     // console.log("DATA", data)
//     // console.log("ROW DATA", data.rows)
//     res.send(null,data.rows)
//   }
// })
// db.Overview.find()
//            .then(data => res.send(data))
// res.send('hi')
// db.Overview.find({rid: parseInt(req.params.id)}, (err, results) => {
//   console.log('THESE ARE THE REQUESTS',req.params.id)
//       // console.log('in query ID IS',id)
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('these are the results', results)
//         res.send(results); 

//       }
   
    // model.get(req.params.id, (err,data) => {

    //   if (err){
    //     console.log(err)
    //   } else {
    //     // db.overview.find({rid:8})
    //     console.log('DATA', data)
    //     // Overview.find({rid: req.params.id})
    //     console.log('req.params.id', req.params.id)
    //     console.log('in get restuarant DATA', data)
    //     res.send(data);
    //   }
    // })

    
  }
}


