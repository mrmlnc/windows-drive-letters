var test = require('ava');
var driveLetters = require('./index');

test('Getting array list of drive letters', function(t) {
  driveLetters.letters(function(err, letters) {
    if (!err && letters.length > 0) {
      t.is(!/C/.test(letters), true);
      t.end();
    } else {
      throw err;
    }
  });
});

test('Getting array list of drive letters (Sync)', function(t) {
  var letters = driveLetters.lettersSync();
  t.is(!/C/.test(letters), true);
  t.end();
});

test('Getting a random one letter', function(t) {
  driveLetters.randomLetter(function(errOld, letterOld) {
    driveLetters.randomLetter(function(err, letter) {
      if (err || errOld) {
        throw err;
      } else {
        t.not(letter, letterOld);
        t.end();
      }
    });
  });
});

test('Getting a random one letter (Sync)', function(t) {
  t.not(driveLetters.randomLetterSync(), driveLetters.randomLetterSync());
  t.end();
});
