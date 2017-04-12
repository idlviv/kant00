var phrases = require('./ua');

function User(name) {
  this.name = name;
}

function Looser(name) {
  this.name = name;
}

User.prototype.hello = function(who) {
  console.log(phrases.Hello, who.name);
};

Looser.prototype.hello = function(who) {
  console.log('Hello', who.name);
};

// exports = module.exports = this т.т.
// this.User = User
// module.exports.User = User
exports.User = User;

//запис, для якого при імпорті звертаэмось
//замість user.Looser просто Looser
module.exports = Looser;
