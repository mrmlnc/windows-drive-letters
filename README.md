# windows-drive-letters

> Get a list of available drive letters for use.

## Install

```
$ npm i -S windows-drive-letters
```

## Usage

### letters & lettersSync

Get a list of all available drive letters for use:

**Asynchronous**

```js
driveLetters.letters().then((letters) => {
  console.log(letters); // => ['A', 'B', ...]
}).catch((err) => {
  console.error(err);s
});
```

**Synchronous**

```js
const letters = driveLetters.lettersSync();
console.log(letters); // => ['A', 'B', ...]
```

### randomLetter & randomLetterSync

Get a random letter, available for use:

**Asynchronous**

```js
driveLetters.randomLetter().then((letter) => {
  console.log(letter); // => 'Q'
}).catch((err) => {
  console.error(err);
});
```

**Synchronous**

```js
const letter = driveLetters.randomLetterSync();
console.log(letter); // => 'N'
```

## Changelog

See the [Releases section of our GitHub project](https://github.com/mrmlnc/windows-drive-letters/releases) for changelogs for each release version.

## License

This software is released under the terms of the MIT license.
