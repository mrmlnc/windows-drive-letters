# windows-drive-letters

Get a list of free to use drive letters in Windows systems

## Usage

Get a list of all available drive letters to use:

```js
driveLetters.getFreeLetters(function(err, letters) {
  if (err) {
    throw err;
  } else {
    console.log(letters);
  }
});

// => ['A', 'B', ...]
```

Getting a random one letter available for use:

```js
driveLetters.getRandomFreeLetter(function(err, letter) {
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

## License

MIT.
