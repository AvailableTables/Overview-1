var tagData = require('./opentable_data.js');
var neighborhoodData = require('./neighborhood_data.js');
var nameData = require('./name_data.js');
var phoneNumberData = require('./phone_number_data.js');
var loremIpsum = require('lorem-ipsum');

var faker = require('faker')
var fs = require('fs')

var price_symbols = ['$30 and under', '$31 to $50', '$50 and over'];
var cuisines = ['American', 'Italian', 'Steakhouse', 'Seafood', 'French', 'Indian', 'Mexican', 'Japanese', 'British', 'Chinese', 'German', 'Spanish', 
'Pizzeria', 'Fusion / Eclectic', 'Barbecue', 'Greek', 'Tapas / Small Plates', 'Grill', 'Comfort Food', 'Turkish', 'Irish', 'Argentinean', 'Afternoon Tea',
'Portuguese', 'Burgers', 'Brazilian', 'Korean', 'Australian', 'Cuban', 'Organic', 'Austrian', 'Russian', 'Vegetarian / Vegan', 'Belgian', 'Breakfast', 'Dessert',
'Swiss', 'Halal', 'Asian', 'Bar / Lounge / Bottle Service', 'Beer Garden', 'Bistro', 'Café', 'Californian', 'Caribbean', 'Contemporary Asian', 'Contemporary European',
'Contemporary French', 'Continental', 'Deli', 'Dim Sum', 'Dining Bar', 'Dinner Cruise', 'Eastern European', 'European' ,'Farm-to-table', 'Gastro Pub',
'Global, International', 'International', 'Latin / Spanish', 'Latin American', 'Mediterranean', 'Middle Eastern', 'Pan-Asian', 'Peruvian', 'Ramen', 'South American',
'Thai', 'Wine Bar'];
var private_dining = [true, false];
var dining_style = ['Casual Dining', 'Casual Elegant'];
var hours = [['Monday - 11:30 AM – Midnight','Tuesday - 11:30 AM – Midnight','Wednesday - 11:00 AM – Midnight','Thursday - 11:30 AM – Midnight','Friday - 11:30 AM – Midnight','Saturday - 11:00 AM – Midnight','Sunday - 11:00 AM – 11:30 PM'],
['Monday-Friday', 'Lunch: 11:30AM-3:30PM', 'Monday – Wednesday', 'Dinner: 5:30PM-12:30AM', 'Thursday – Friday', 'Dinner: 5:30PM-1:00AM', 'Saturday', 'Brunch: 11:00AM-3:30PM', 'Dinner: 5:30PM-1:00AM', 'Sunday', 'Brunch: 11:00AM-3:30PM', 'Dinner: 5:30PM-12:30AM'],
['M-Th: 11:30 a.m. – midnight', 'Fri: 11:30 a.m. – 1:00 a.m.', 'Sat: 10:00 a.m. – 1:00 a.m.', 'Sun: 10:00 a.m. – midnight'], 
['Monday & Tuesday 5:30pm - 11:00pm', 'Wednesday & Thursday 5:30pm - 12:00am', 'Friday & Saturday 5:00pm - 1:00am', 'Sunday 5:00pm - 11:00pm'],
['Sunday – Wednesday: 5pm – 12am', 'Thursday – Saturday: 5pm – 2am', 'Last dinner reservations at 11:45am (Sun - Wed) and 1:45am (Thu - Sat).', 'Restaurant Bar remains open at least one hour after the kitchen closes.']]
var phone_number_area_code = ['(212) ', '(646) '];
var payment_options = [['AMEX, Carte Blanche, Diners Club, Discover, MasterCard, Pay with OpenTable, Visa'], ['AMEX, Carte Blanche, Diners Club, Discover, MasterCard, Visa'], ['AMEX, Diners Club, Discover, MasterCard, Visa'], ['AMEX, Discover, MasterCard, Visa'], ['AMEX, MasterCard, Visa']];
var dress_code = ['Smart Casual', 'Business Casual', 'Casual Dress']
var executive_chef = nameData.slice(0, 100)
var private_party_facilities = ['Available for parties with 15 to 250 guests.', 'Private dining with bar for 45 seated guests, 60 standing. Private dining for 60 seated guests, 100 standing. Exclusive private dining for 300 seated guests, 550 standing.'];
var private_party_contact_name = nameData.slice(100, 200);
var cross_street = ['Broadway', 'Madison', 'Between 5th and 6th ave', '43rd St. (southeast corner)', 'West 49th Street', 'Between E. 38th & E 39th Streets', 'Between 27th & 28th', '13th Street', '16th Street', 'Between Park and Broadway', '26th Street', '30th Street', 'Between Broadway and 8th Avenue', '24th Street']
var parking_details = ['There are two independent parking garages adjacent to the restaurant.', 'We validate parking at a discounted price only after 5PM. $14 upto 2.5 hours or $17 upto 4 hours.', 'Street Parking where available. The nearest garage is on 36th street off of 7th Ave.', 'Street parking after 7:00PM. We validate parking (after 5pm) at Meyers Parking 9-19 west 35th street', 'Street parking after 6pm M-F Weekends all day']
var public_transit = ['R/W (yellow line) trains at 28th and Broadway, 1 train at 28th and 7th Avenue', '1, 2, 3, 7, 9 N, R, W, & Q trains to 42nd Street/Times Square.', 'Near Herald Square 34th st: N, Q, R, F, M; Near Penn Station 34th St: 1, 2, 3, A, C, E', '23rd street stop, 6 line 23rd street stop, N,R lines 23rd street stop, F, M lines Union Square']
var additional = ['Banquet, Bar Dining, Bar/Lounge, Beer, BYO Wine, Chef\'s Table, Corkage Fee, Counter Seating, Full Bar, Outdoor dining, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Bar/Lounge, Full Bar, Late Night, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Full Bar, Late Night, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Late Night, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Weekend Brunch, Wine', 'Bar Dining, Wine']


const start = Date.now();
var iterationCount = 0;
var count = 0;

var callData = () => {
  var data = '';
  var batch = 0;
  
  while (batch < 1000) {
      batch++
      count++
  
      str = ''; 
      str += count + '^'; 
      str += faker.lorem.word() + '^';
      str += Math.floor(Math.random() * (100 - 1) + 1) + '^';
      str += faker.address.streetAddress() + '^' ;
      str += faker.phone.phoneNumberFormat() + '^';
      str += 'http://www.' + faker.lorem.word().replace(" ", "") + '.com' + '^';
      str += Math.random() * (5 - 3) + 3 + '^',
      str += price_symbols[Math.floor(Math.random() * price_symbols.length)] + '^',
      str += JSON.stringify([cuisines[Math.floor(Math.random() * cuisines.length)], cuisines[Math.floor(Math.random() * cuisines.length)]]) + '^',
      str += JSON.stringify([tagData[Math.floor(Math.random() * tagData.length)], tagData[Math.floor(Math.random() * tagData.length)], tagData[Math.floor(Math.random() * tagData.length)]]) + '^',
      str += faker.lorem.sentences() +'^',
      str += private_dining[Math.floor(Math.random() * private_dining.length)] + '^',
      str += dining_style[Math.floor(Math.random() * dining_style.length)] + '^',
      str += hours[Math.floor(Math.random() * hours.length)] + '^',
      str += payment_options[Math.floor(Math.random() * payment_options.length)] + '^',
      str += dress_code[Math.floor(Math.random() * dress_code.length)] + '^',
      str += executive_chef[Math.floor(Math.random() * executive_chef.length)] + '^',
      str += faker.lorem.sentences() + '^',
      str += private_party_facilities[Math.floor(Math.random() * private_party_facilities.length)] + '^',
      str += private_party_contact_name[Math.floor(Math.random() * private_party_contact_name.length)] + '^',
      str += phone_number_area_code[Math.floor(Math.random() * phone_number_area_code.length)] + phoneNumberData[Math.floor(Math.random() * phoneNumberData.length)] + '^',
      str += neighborhoodData[Math.floor(Math.random() * neighborhoodData.length)] + '^',
      str += cross_street[Math.floor(Math.random() * cross_street.length)] + '^',
      str += parking_details[Math.floor(Math.random() * parking_details.length)] + '^',
      str += public_transit[Math.floor(Math.random() * public_transit.length)] + '^',
      str += faker.lorem.sentences() + '^',
      str += faker.lorem.sentences() + '^',
      str += additional[Math.floor(Math.random() * additional.length)]
      iterationCount++
      
      data += str + '\n'


    // console.log('data in while loop', data)
  }
  // console.log('THE DATA', data)
  // return data; 

  // stream.on('drain', function() {
  //   console.log('drain');
  //   console.log(Date.now() - start) // never happen
  // });
  // stream.write(data)
  // i++
  return data;

  // writeData('./rest.txt',data)
}

var stream = fs.createWriteStream(__dirname + 'pg.csv');

stream.on('drain', function () {
  console.log('DRAIN called', iterationCount)
  write();
});
write();


 function write() {
  while (iterationCount < 10000000) { // 1Gtimes
  
    if (!stream.write(callData())) {
      return;
    }
  }

  console.log((Date.now() - start) / 1000)
 stream.end();
}


