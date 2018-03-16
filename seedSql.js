

CREATE DATABASE weGotData;

USE weGotData;


// { id: 4599956,
//   name: 'bob',
//   tagline: 'bad',
//   type: 'Restaurant',
//   vicinity: '495 Geary Street, San Francisco',
//   priceLevel: 3,
//   zagatFood: 3.5,
//   zagatDecor: 9.3,
//   zagatService: 3,
//   longDescription: 'So ullamco tongue minim commodo do meatball tail dru' }


CREATE TABLE restaurant (
  id int auto_increment,
  name varchar(10),
  tagline varchar(15),
  _type varchar(12),
  vicinity varchar(50),
  priceLevel: int,
  zagatFood: int,
  zagatDecor: int,
  zagatService: int,
  longDescription: varchar(100)
);


