import * as assert from 'assert';

import * as utils from './utils';

describe('Utils', () => {
	describe('.getLettersFromTable', () => {
		it('should return letters from stdout', () => {
			const stdout = [
				'Caption  \r',
				'C: \r',
				'D: \r',
				'\r'
			].join('\r\n');

			const expected = ['C', 'D'];

			const actual = utils.getLettersFromTable(stdout);

			assert.deepStrictEqual(actual, expected);
		});

		it('should return an empty array for an empty stdout', () => {
			const stdout = '';

			const actual = utils.getLettersFromTable(stdout);

			assert.strictEqual(actual.length, 0);
		});
	});
});
