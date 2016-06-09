const assert = require('assert');
const m = require('./index');

describe('Asynchronous', () => {
  it('Should give the free letters', () => {
    return m.letters()
      .then((letters) => {
        assert.ok(letters.indexOf('C') === -1);
      });
  });

  it('Should give a random letter', () => {
    return Promise.all([
      m.randomLetter(),
      m.randomLetter()
    ]).then((letters) => {
      assert.notEqual(letters[0], letters[1]);
    });
  });
});

describe('Synchronous', () => {
  it('Should give the free letters', () => {
    assert.ok(m.lettersSync().indexOf('C') === -1);
  });

  it('Should give a random letter', () => {
    assert.notEqual(m.randomLetterSync(), m.randomLetterSync());
  });
});
