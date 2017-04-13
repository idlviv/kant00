var db = require('../db');

function User(name) {
  this.name = name;
}

// function Looser(name) {
//   this.name = name;
// }

User.prototype.hello = function(who) {
  console.log(db.getPhrase('Hello'), who.name);
};

// Looser.prototype.hello = function(who) {
//   console.log('Hello', who.name);
// };

// exports = module.exports = this т.т.
// this.Looser = Looser
// module.exports = Looser
// exports.Looser = Looser;

//запис, для якого при імпорті звертаэмось
//замість user.User просто User
module.exports = User;
