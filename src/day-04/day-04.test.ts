import {
	getNumberOfPossiblePasswords,
	getNumberOfPossiblePasswordsPartTwo,
	isValidPassword,
	isValidPasswordPartTwo,
} from './day-04';

// Part 1
test('if isValidPassword recognizes 111111 as valid password', () => {
	expect(isValidPassword(111111)).toBeTruthy();
});

test('if isValidPassword recognizes 223450 as invalid password (decreasing number ltr)', () => {
	expect(isValidPassword(223450)).toBeFalsy();
});

test('if isValidPassword recognizes 123789 as invalid password (no double adjacending digit)', () => {
	expect(isValidPassword(123789)).toBeFalsy();
});

test('number of possible passwords', () => {
	const rangeStart = 178416;
	const rangeEnd = 676461;
	const numberOfPossiblePasswords = getNumberOfPossiblePasswords(rangeStart, rangeEnd);
	console.info('number of possible pws: ', numberOfPossiblePasswords);
});

// Part 2
test('if isValidPasswordPartTwo recognizes 112233 as valid password', () => {
	expect(isValidPasswordPartTwo(112233)).toBeTruthy();
});

test('if isValidPasswordPartTwo recognizes 123444 as invalid password (part of larger group [3x4s])', () => {
	expect(isValidPasswordPartTwo(123444)).toBeFalsy();
});

test('if isValidPasswordPartTwo recognizes 111122 as valid password (has larger group but has the 2s)', () => {
	expect(isValidPasswordPartTwo(111122)).toBeTruthy();
});

test('number of possible passwords', () => {
	const rangeStart = 178416;
	const rangeEnd = 676461;
	const numberOfPossiblePasswords = getNumberOfPossiblePasswordsPartTwo(rangeStart, rangeEnd);
	console.info('number of possible pws: ', numberOfPossiblePasswords);
});
