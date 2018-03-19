var mysql = require('mysql');

var generateRandom2 = (num) => {
  var options = [1.3,2.0,3.5,4.0,5.5,6.7,7.3,8.2,9.3,4.5,6.8,1.9];
  var random = Math.floor(Math.random() * 9);
  var words = ['hello', 'yo', 'bacon', 'stuff', 'random', 'taste', 'good', 'great', 'bad', 'something', 'white', 'red'];
  var r = Math.floor(Math.random() * words.length-1);
  var names = ['jordyn', 'steve', 'bob', 'bill', 'kevin', 'tyler', 'jen', 'greg', 'ryan'];
  var price = [1,2,3,4,5,6,7,8,9];
  var descriptions = ['Spicy jal in jowl deserunt, prosciutto ullamco tongue minim commodo do meatball tail dru'];
  var item = [ null,names[random],words[r], 'Restaurant', "495 Geary Street, San Francisco", price[random],options[random], options[r], price[random], descriptions[0]]
  return item
};

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MyNewPass",
});

con.connect(function(err) {
  if (err) throw err;
  con.query("CREATE DATABASE weGotData", function (err, result) {
    if (err) throw err;
  });
  con.query("use weGotData", function (err, result) {
    if (err) throw err;
  })
   var sql = "CREATE TABLE restaurant (id int auto_increment, name varchar(10), tagline varchar(15), _type varchar(12), vicinity varchar(50), priceLevel varchar(20), zagatFood varchar(20), zagatDecor varchar(20), zagatService varchar(20), longDescription varchar(150),primary key (id))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    tenMil(1);
  });
  function tenMil (numMain) {
    if(numMain === 11){
      con.end();
      return;
    } else {
      function count (num) {
        if(num < 50){
          var values = [];
        for(var i = 1; i < 20001; i++){
          values.push(generateRandom2(i));
        }
        var addData = "INSERT INTO restaurant VALUES ?";
        con.query(addData, [values], function (err, result) {
          if (err) throw err;
          if(result){
            console.log("Number of records inserted: " + result.affectedRows);
            count(num + 1);
          }
        });
        } else {
          tenMil(numMain + 1);
          return;
        }
      }
      count(1);
    }
  }
});





