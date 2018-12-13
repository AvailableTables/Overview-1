const axios = require('axios');
// const model = require('../models/overviewModel.js')
const path = require('path');
const Overview = require("../../client/dist/bundle-server.js").default.default;
const React = require("react");
const ReactDOMServer = require("react-dom/server");
var connection = require('../../db/postgresIndex.js')


const ssr = async id => {
  let props = await connection
    .query(`SELECT * FROM restaurants.overview WHERE rid =${id}`)
    .then(res => {
      return res.rows[0];
    })
    .catch(err => {
      console.log("There is an error in accessing props", err);
    });

  let component = React.createElement(Overview, props);
  let html = ReactDOMServer.renderToString(component);
  return { html, props };
};

module.exports = {
  get: async (req, res) => {
    let { html, props } = await ssr(req.params.id);

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
      <div id="overview">${html}</div>
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
  },

  getRestaurant: (req, res) => {
    let id = [req.params.id];

    connection.query(
      `SELECT * FROM restaurants.overview WHERE rid =${id}`,
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.send(data.rows[0]);
        }
      }
    );
  }
};


