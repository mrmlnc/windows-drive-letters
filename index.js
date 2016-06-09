var cp = require('child_process');
var alphabet = require('alphabet');
var arrDiff = require('arr-diff');
var tableParser = require('table-parser');

function getLetters(cb) {
  cp.exec('wmic logicaldisk get caption', function(err, stdout, stderr) {
    if (err) {
      cb(stderr);
    } else {
      var letters = tableParser.parse(stdout);
      cb(null, letters.map(function(item) {
        return item.Caption[0].replace(':', '');
      }));
    }
  });
}

function getLettersSync() {
  var stdout = cp.execSync('wmic logicaldisk get caption');
  var letters = tableParser.parse(stdout.toString());
  return letters.map(function(item) {
    return item.Caption[0].replace(':', '');
  });
}

module.exports.letters = function(cb) {
  getLetters(function(err, letters) {
    if (err) {
      cb(err);
    } else {
      cb(null, arrDiff(alphabet.upper, letters));
    }
  });
};

module.exports.lettersSync = function() {
  var letters = getLettersSync();
  return arrDiff(alphabet.upper, letters);
};

module.exports.randomLetter = function(cb) {
  getLetters(function(err, letters) {
    if (err) {
      cb(err);
    } else {
      cb(null, letters[Math.floor(Math.random() * letters.length)]);
    }
  });
};

module.exports.randomLetterSync = function() {
  var letters = arrDiff(alphabet.upper, getLettersSync());
  return letters[Math.floor(Math.random() * letters.length)];
};
