const mongoose = require('mongoose');
const db = require('./db/db.js');
const allRestaurantData = require('./finData.json');
const fakeData = require('./fakeData.js');
const dbAddress = process.env.DB_ADDRESS || 'localhost';

//mongoose.connect(`mongodb://${dbAddress}/weGotData`);

let generateRandom = (num) => {
  var options = [1.3,2.0,3.5,4.0,5.5,6.7,7.3,8.2,9.3,4.5,6.8,1.9];
  var random = Math.floor(Math.random() * 9);
  var words = ['hello', 'yo', 'bacon', 'stuff', 'random', 'taste', 'good', 'great', 'bad', 'something', 'white', 'red'];
  var r = Math.floor(Math.random() * words.length-1);
  var names = ['jordyn', 'steve', 'bob', 'bill', 'kevin', 'tyler', 'jen', 'greg', 'ryan'];
  var price = [1,2,3,4,5,6,7,8,9];
  var descriptions = ['Spicy jalapeno bacon ipsum dolor amet tenderloin filet mignon shoulder in jowl deserunt, prosciutto ullamco tongue minim commodo do meatball tail dru'];
  var obj = {
    id : num + 1,
    name: names[random],
    tagline: words[r],
    type: 'Restaurant',
    vicinity: "495 Geary Street, San Francisco",
    priceLevel: price[random],
    zagatFood: options[random],
    zagatDecor: options[r],
    zagatService: price[random],
    longDescription: descriptions[0]
  };
  return obj;
};


//first attempt
// const seedDb = () => {
//   var start = 1;
//   var end = 0 + 100000;
//   var test = 1;
//   for(var i = 0; i < test; i++){
//     mongoose.connect(`mongodb://${dbAddress}/weGotData`);
//     var data = [];

//     for(var j = start; j < end; j++){
//       console.log(j);
//       data.push(generateRandom(j));

//     }
//     start += 99999;
//     end += 100000;

//   // for(var i = 0; i < 100000; i++){
//   //   data.push(generateRandom(i));
//   // }

//     // db.count().then((counts) => {
//     //   console.log('counts', counts);
//         // const overviewInfo = data.map((item) => (
//         //   {
//         //     id: item.id,
//         //     name: item.name,
//         //     tagline: item.tagline,
//         //     type: 'Restaurant',
//         //     vicinity: item.vicinity,
//         //     priceLevel: item.priceLevel,
//         //     zagatFood: item.zagatFood,
//         //     zagatDecor: item.zagatDecor,
//         //     zagatService: item.zagatService,
//         //     longDescription: item.longDescription,
//         //   }
//         // ));
//         //console.log(overviewInfo)
//         db.insertMany(data, () => {
//           console.log('done seeding!');
//           mongoose.disconnect();
//           test = 2;
//         });

//     // });
//   }
//   //mongoose.disconnect();
// };
// seedDb();


const seedDb = (num, start, end) => {
  // var start = start;
  // var end = 0 + 100000;
  // var test = 1;
  if(num < 110){
    mongoose.connect(`mongodb://${dbAddress}/weGotData`);
    var data = [];

    for(var j = start; j < end; j++){
      //console.log(j);
      data.push(generateRandom(j));

    }
    // start += 99999;
    // end += 100000;

  // for(var i = 0; i < 100000; i++){
  //   data.push(generateRandom(i));
  // }

    // db.count().then((counts) => {
    //   console.log('counts', counts);
        // const overviewInfo = data.map((item) => (
        //   {
        //     id: item.id,
        //     name: item.name,
        //     tagline: item.tagline,
        //     type: 'Restaurant',
        //     vicinity: item.vicinity,
        //     priceLevel: item.priceLevel,
        //     zagatFood: item.zagatFood,
        //     zagatDecor: item.zagatDecor,
        //     zagatService: item.zagatService,
        //     longDescription: item.longDescription,
        //   }
        //));
        // });
        //console.log(overviewInfo)
        db.insertMany(data, () => {
          console.log(data[0]);
          mongoose.disconnect();
          seedDb(num + 1, start += 99999, end += 100000);
        });
    } else {
      // return;
         //mongoose.connect(`mongodb://${dbAddress}/weGotData`);
     //  console.log('not less than two');
     // db.count().then((counts) => {
     //  console.log('counts', counts);
     //    mongoose.disconnect();
     // });
    }
    // });
  //mongoose.disconnect();
};
seedDb(1, 1, 100000);



