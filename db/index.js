const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');


mongoose.connect('mongodb://localhost/restaurants') //hosted version from mlab

const db = mongoose.connection;
// autoIncrement.initialize(db);

const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true)


const OverviewSchema = new Schema({
  rid: {type: Number, required: true},
  name: {type: String, required: true}, //
  review_count: Number, //
  display_address: Array, //
  display_phone: String, //
  coordinates: Object, //
  website: String, //
  aggregate_score: Number, //
  price_quantile: String, //
  cuisine: Array, //
  tags: Array, // 
  description: String, // 
  private_dining: Boolean, // 
  dining_style: String, //
  hours: Array, //
  payment_options: Array, // 
  dress_code: String, //
  executive_chef: String, //
  catering: String, //
  private_party_facilities: String, //
  private_party_contact_name: String, //
  private_party_contact_number: String, //
  coordinates: Object, // 
  neighborhood: String, //
  cross_street: String, //
  parking_details: String, //
  public_transit: String, //
  entertainment: String, //
  special_events_promotions: String, //
  additional: String, //
  private_dining_details: String //
})

// OverviewSchema.plugin(autoIncrement.plugin, {model: 'Overview', field: 'rid', startAt: 1, incrementBy: 1})
const Overview = mongoose.model('Overview', OverviewSchema, 'overview');

mongoose.Promise = Promise;
db.on('error', (err) => {
  console.log('Mongoose default connection error:', err);
})
db.once('open', () => {
  console.log('Connected to db!');
})

module.exports.db = db;
module.exports.Overview = Overview;




