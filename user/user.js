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

exports.User1 = User;
global.Looser1 = Looser;
