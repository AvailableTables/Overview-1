var db = require('../../db/index.js');
var connection = require('../../db/postgresIndex.js')

module.exports = {
  // get: (id, cb) => {
  //   console.log('IN GET INFO')
  //   db.Overview.find({rid: id}, (err, results) => {
  //     console.log('in query ID IS',id)
  //     if (err) {
  //       console.log(err);
  //     }
  //     cb(null, results); 
  //   })
  // }
  get: (id,cb) => {
    //   console.log("in PSQL database")
    //   console.log('id', id)
    // let info= `SELECT * FROM restaurants.overview WHERE rid = (?)`;
    connection.query(`SELECT * FROM restaurants.overview WHERE rid =${id}`, (err, data) => {
        // console.log('IN CONN QUERY')
        // console.log("ID IN CONN QUERY", id)
        // console.log("INFO IN CONN QUERY", info)
        if (err) {
            console.log(err);
        } else {
            console.log("DATA",data.rows)
            
            cb(data);
        }
    });

  
},

delete : (id, cb) => {
    let info= `DELETE FROM restaurants.overview WHERE rid (?)`;
    connection.query(info, id, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            cb(data);
        }
    });
   
}
}