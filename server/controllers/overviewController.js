const axios = require('axios');
const model = require('../models/overviewModel.js')
const path = require('path');
const Overview = require("../../client/dist/bundle-server.js").default.default;
const React = require("react");
const ReactDOMServer = require("react-dom/server");
var connection = require('../../db/postgresIndex.js')


const ssr = async (id) => {
  // console.log('This is the id in ssr: ', id)
  // console.log('IN SSR')
  console.log("Overview", Overview)  
    let props = await connection.query(`SELECT * FROM restaurants.overview WHERE rid =${id}`)
                .then((res) => {return res.rows[0]})
                .catch((err) => {console.log('There is an error in accessing props', err)})

  // console.log('PROPS',props)
  let component = React.createElement(Overview,props);
  // console.log('this is the componenet in ssr', component)
  let html = ReactDOMServer.renderToString(component);
  // console.log('the html is :', html)
  return {html, props}; 
}


// const {handleGettingUserId} = require('.../db/methods.js')
module.exports = {
  get: async (req, res) => {
    console.log('in get req')
    

    let {html, props} = await ssr(req.params.id);
   console.log('this is props in get :', props)
   console.log('this is html in get :', html)
    res.send(`
    <!DOCTYPE html>
    <html>
    
    <head>
      <title>Overview</title>
      <link rel="stylesheet" type="text/css" href="/styles.css">
      <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <script src="https://use.fontawesome.com/releases/v5.4.2/js/all.js" integrity="sha384-wp96dIgDl5BLlOXb4VMinXPNiB32VYBSoXOoiARzSTXY+tsK8yDTYfvdTyqzdGGN"
        crossorigin="anonymous"></script>
      <link rel="manifest" href="manifest.json" />
    </head>
    
    <body>
      <div id="Overview">${html}</div>
      <script type="text/javascript" src="/bundle.js"></script>
      <script>
      ReactDOM.hydrate(

       
          React.createElement(Overview, ${JSON.stringify(props)}),
          document.getElementById('overview')
      
        );
      </script>
    </body>
    
    </html>
  `);

   





    // res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
      

  },
//   var props = { title: 'Universal React' };
//   var html = ReactDOMServer.renderToString(
//       React.createElement(Component, props)
//   );
//   response.send(html);
// });

// ReactDOM.hydrate(

//   ReactDOM.render(
//     React.createElement(Overview, ${JSON.stringify(props)}),
//     document.getElementById('overview')
// )
//   );

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


