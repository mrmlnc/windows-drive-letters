# windows-drive-letters

Get a list of available drive letters for use.

## Usage

Get a list of all available drive letters for use:

#### .letters()

```js
driveLetters.letters().then((letters) => {
  console.log(letters);
}).catch((err) => {
  console.error(err);
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
driveLetters.randomLetter().then((letter) => {
  console.log(letter);
}).catch((err) => {
  console.error(err);
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

## Changelog

See the [Releases section of our GitHub project](https://github.com/mrmlnc/windows-drive-letters/releases) for changelogs for each release version.

## License

This software is released under the terms of the MIT license.
