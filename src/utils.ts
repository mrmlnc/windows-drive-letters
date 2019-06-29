export function getLettersFromTable(stdout: string): string[] {
	return stdout.split(/[\r\n]+/).reduce((letters, line, index) => {
		if (index !== 0 && line.trim() !== '') {
			letters.push(line[0]);
		}

		return letters;
	}, [] as string[]);
}
