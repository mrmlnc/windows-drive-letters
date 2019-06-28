import * as cp from 'child_process';

import arrayDiff = require('array-differ');

import * as utils from './utils';

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const COMMAND = 'wmic logicaldisk get caption';
const IS_WINDOWS = process.platform === 'win32';

export async function free(): Promise<string[]> {
	validateWindowsPlatform();

	const letters = await used();

	return arrayDiff(ALPHABET, letters);
}

export function freeSync(): string[] {
	validateWindowsPlatform();

	return arrayDiff(ALPHABET, usedSync());
}

export async function used(): Promise<string[]> {
	validateWindowsPlatform();

	const stdout = await runCommand();

	return utils.getLettersFromTable(stdout);
}

export function usedSync(): string[] {
	validateWindowsPlatform();

	return utils.getLettersFromTable(runCommandSync());
}

export async function randomFree(): Promise<string> {
	validateWindowsPlatform();

	const letters = await free();

	const index = getRandomIndex(letters.length);

	return letters[index];
}

export function randomFreeSync(): string {
	validateWindowsPlatform();

	const letters = freeSync();
	const index = getRandomIndex(letters.length);

	return letters[index];
}

function runCommand(): Promise<string> {
	return new Promise((resolve, reject) => {
		cp.exec(COMMAND, (error, stdout) => error ? reject(error) : resolve(stdout));
	});
}

function runCommandSync(): string {
	return cp.execSync(COMMAND, { encoding: 'utf8' });
}

function getRandomIndex(length: number): number {
	return Math.floor(Math.random() * length);
}

function validateWindowsPlatform(): void | never {
	if (!IS_WINDOWS) {
		throw new Error('Windows only');
	}
}
