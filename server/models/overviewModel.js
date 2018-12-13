var db = require("../../db/index.js");
var connection = require("../../db/postgresIndex.js");

module.exports = {
  get: (id, cb) => {
    connection.query(
      `SELECT * FROM restaurants.overview WHERE rid =${id}`,
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          cb(data);
        }
      }
    );
  },

  delete: (id, cb) => {
    let info = `DELETE FROM restaurants.overview WHERE rid (?)`;
    connection.query(info, id, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        cb(data);
      }
    });
  }
};
