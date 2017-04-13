// з початку шукає ф-л user, потім папку user
var User = require('./user');
var log = require('./logger')(module);

//Щоб написати просто db без шляху, встановити
//>set NODE_PATH=. >node server.js
// https://nodejs.org/api/modules.html#modules_all_together
var db = require('./db');

db.connect();

function run() {

  var bob = new User('Bob');
  var job = new User('Job');

  log(db.getPhrase('Run successful'));
  // var bobLooser = new User.Looser('Bob');
  // var jobLooser = new User.Looser('Job');

  bob.hello(job);
  // bobLooser.hello(jobLooser);
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
