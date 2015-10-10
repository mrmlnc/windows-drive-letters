var test = require('ava');
var driveLetters = require('./index');

test('Getting array list of drive letters', function(t) {
  driveLetters.getFreeLetters(function(err, letters) {
    if (!err && letters.length > 0) {
      t.is(!/C/.test(letters), true);
      t.end();
    } else {
      throw err;
    }
  });
});

test('Getting a random one letter', function(t) {
  driveLetters.getRandomFreeLetter(function(errOld, letterOld) {
    driveLetters.getRandomFreeLetter(function(err, letter) {
      if (err || errOld) {
        throw err;
      } else {
        t.not(letter, letterOld);
        t.end();
      }
    });
  });
});
