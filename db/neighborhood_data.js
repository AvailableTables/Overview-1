
var data = [
  {
    name: "Chelsea"
  },
  {
    name: "Garment District / Flower District"
  },
  {
    name: "Gramercy / Flatiron"
  },
  {
    name: "Hell's Kitchen"
  },
  {
    name: "Kips Bay"
  },
  {
    name: "Midtown East"
  },
  {
    name: "Midtown West"
  },
  {
    name: "Murray Hill"
  },
  {
    name: "NoMad"
  },
  {
    name: "Rockefeller Center Midtown"
  },
  {
    name: "Theater District / Times Square"
  },
  {
    name: "Turtle Bay"
  }
];

// var generateData = function(object) {
//   var newArray = [];
 
//   var counter = 0; 
//   for (var i = 0; i < 10; i++) {
//     var place =  faker.address.city(); 
//     newArray.push(place);
//   }
//   return newArray;
// };

var generateData = function(object) {
  var newArray = [];
  for (var i = 0; i < object.length; i++) {
    newArray.push(object[i].name);
  }
  return newArray;
};

module.exports = generateData(data);
