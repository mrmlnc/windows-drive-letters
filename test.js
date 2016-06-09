var assert = require('assert');
var driveLetters = require('./index');

it('Getting array list of drive letters', function(done) {
  driveLetters.letters(function(err, letters) {
    if (err) {
      assert.fail(err);
      done();
    }

    assert.equal(!/C/.test(letters), true);
    done();
  });
});

it('Getting array list of drive letters (Sync)', function() {
  var letters = driveLetters.lettersSync();
  assert.equal(!/C/.test(letters), true);
});

it('Getting a random one letter', function(done) {
  driveLetters.randomLetter(function(errOld, letterOld) {
    driveLetters.randomLetter(function(err, letter) {
      if (err || errOld) {
        assert.fail(err, errOld);
        done();
      }

      assert.notEqual(letter, letterOld);
      done();
    });
  });
});

it('Getting a random one letter (Sync)', function() {
  assert.notEqual(driveLetters.randomLetterSync(), driveLetters.randomLetterSync());
});
