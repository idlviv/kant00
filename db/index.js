var phrases;

exports.connect = function() {
  phrases = require('./ua');
};

exports.getPhrase = function(name) {
  if (!phrases[name]) {
    throw new Error('Немає такої фрази', name);
  } else {
    return phrases[name];
  }
};
