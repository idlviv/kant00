// з початку шукає ф-л user, потім папку user
// а в ній по замовчуванню шукає ф-л index (user тут папка)
var user = require('./user');

//exports
var bob = new user.User1('Bob');
var job = new user.User1('Job');
//global
var bobLooser = new Looser1('Bob');
var jobLooser = new Looser1('Job');

bob.hello(job);
bobLooser.hello(jobLooser);
