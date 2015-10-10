var alphabet = require('alphabet');
var arrDiff = require('arr-diff');
var driveList = require('drivelist');
var eachAsync = require('each-async');

var getFreeDriveLetters = function(cb) {
  driveList.list(function(err, disks) {
    if (err) {
      cb(new Error(err));
    } else {
      var actual = [];
      eachAsync(disks, function(item, index, done) {
        actual.push(item.mountpoint.replace(':', ''));
        done();
      }, function(err) {
        if (err) {
          cb(new Error(err));
        } else {
          cb(null, arrDiff(alphabet.upper, actual));
        }
      });
    }
  });
};

module.exports.getFreeLetters = function(cb) {
  getFreeDriveLetters(cb);
};

module.exports.getRandomFreeLetter = function(cb) {
  getFreeDriveLetters(function(err, letters) {
    if (err) {
      cb(err);
    } else {
      cb(null, letters[Math.floor(Math.random() * letters.length)]);
    }
  });
};
