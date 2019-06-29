# windows-drive-letters

> Get a list of available drive letters for use.

## Donation

Do you like this project? Support it by donating, creating an issue or pull request.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)][paypal_mrmlnc]

## Installation

```console
npm install windows-drive-letters
```

## API

### free

Returns a `Promise` with an array of free letters.

```js
const letters = await wdl.free();
```

### freeSync

Returns an array of free letters.

```js
const letters = wdl.freeSync();
```

### used

Returns a `Promise` with an array of used letters.

```js
const letters = await wdl.used();
```

### usedSync

Returns an array of used letters.

```js
const letters = wdl.usedSync();
```

### randomFree

Returns a `Promise` with a random free letter.

```js
const letter = await wdl.randomFree();
```

### randomFreeSync

Returns a random free letter.

```js
const letter = wdl.randomFreeSync();
```

## Changelog

See the [Releases section of our GitHub project][github_releases] for changelog for each release version.

## License

This software is released under the terms of the MIT license.

[paypal_mrmlnc]:https://paypal.me/mrmlnc
[github_releases]: https://github.com/mrmlnc/windows-drive-letters/releases
