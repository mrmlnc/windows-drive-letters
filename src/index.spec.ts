import * as assert from 'assert';

import * as pkg from './index';

function getUniqueItems(array: string[]): string[] {
	return Array.from(new Set(array));
}

describe('Package', () => {
	describe('.free', () => {
		it('should return free letters', async () => {
			const actual = await pkg.free();

			assert.notStrictEqual(actual.length, 0);
			assert.ok(!actual.includes('C'));
		});
	});

	describe('.freeSync', () => {
		it('should return free letters', () => {
			const actual = pkg.freeSync();

			assert.notStrictEqual(actual.length, 0);
			assert.ok(!actual.includes('C'));
		});
	});

	describe('.used', () => {
		it('should return used letters', async () => {
			const actual = await pkg.used();

			assert.notStrictEqual(actual.length, 0);
			assert.ok(actual.includes('C'));
		});
	});

	describe('.usedSync', () => {
		it('should return used letters', () => {
			const actual = pkg.usedSync();

			assert.notStrictEqual(actual.length, 0);
			assert.ok(actual.includes('C'));
		});
	});

	describe('.randomFree', () => {
		it('should return random free letter', async () => {
			const letters = await Promise.all(Array(3).fill(0).map(pkg.randomFree));

			const actual = getUniqueItems(letters);

			assert.ok(actual.length > 1);
		});
	});

	describe('.randomFreeSync', () => {
		it('should return random free letter', () => {
			const letters = Array(3).fill(0).map(pkg.randomFreeSync);

			const actual = getUniqueItems(letters);

			assert.ok(actual.length > 1);
		});
	});
});
