// з початку шукає ф-л user, потім папку user
// а в ній по замовчуванню шукає ф-л index (user тут папка)
var user = require('./user');

function run() {
//exports
  var bob = new user.User('Bob');
  var job = new user.User('Job');
//global
  var bobLooser = new Looser('Bob');
  var jobLooser = new Looser('Job');

  bob.hello(job);
  bobLooser.hello(jobLooser);
}

// якщо хтось використовує його як модуль через
// require т.т. є parent - тоді експортуємо
// ф-ю run з текстом модуля,
// якщо запустили напряму, то виконуємо ф-ю run
if (module.parent) {
  exports.run = run;
} else {
  run();
}