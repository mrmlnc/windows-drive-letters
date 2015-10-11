# windows-drive-letters

Get a list of available drive letters for use.

## Usage

Get a list of all available drive letters for use:

#### .letters()

```js
driveLetters.letters(function(err, letters) {
  if (err) {
    throw err;
  } else {
    console.log(letters);
  }
});

// => ['A', 'B', ...]
```

#### .lettersSync()

```js
var letters = driveLetters.lettersSync();
console.log(letters);

// => ['A', 'B', ...]
```

#### .randomLetter()

Getting a random one letter available for use:

```js
driveLetters.randomLetter(function(err, letter) {
  if (err) {
    throw err;
  } else {
    console.log(letter);
  }
});

// => 'A'
// => 'Q'
// => 'Z'
```

#### .randomLetterSync()

```js
var letter = driveLetters.randomLetterSync();
console.log(letter);
console.log(letter);
console.log(letter);

// => 'G'
// => 'N'
// => 'K'
```

## License

MIT.
