export const getNumberOfPossiblePasswords = (rangeStart: number, rangeEnd: number): number => {
	let numberOfPWs = rangeEnd - rangeStart;
	for (; rangeStart < rangeEnd; rangeStart++) {
		if (!isValidPassword(rangeStart)) {
			numberOfPWs--;
		}
	}
	return numberOfPWs;
};

export const getNumberOfPossiblePasswordsPartTwo = (rangeStart: number, rangeEnd: number): number => {
	let numberOfPWs = rangeEnd - rangeStart;
	for (; rangeStart < rangeEnd; rangeStart++) {
		if (!isValidPasswordPartTwo(rangeStart)) {
			numberOfPWs--;
		}
	}
	return numberOfPWs;
};

export const isValidPassword = (num: number): boolean => {
	const digits = splitNumberIntoDigits(num);
	return hasTwoEqualAdjacentDigits(digits) && !hasDecreasingDigits(digits);
};

export const isValidPasswordPartTwo  = (num: number): boolean => {
	const digits = splitNumberIntoDigits(num);
	return hasTwoEqualSeparateAdjacentDigits(digits) && !hasDecreasingDigits(digits);
};

const splitNumberIntoDigits = (num: number): number[] => {
	const digits = num.toString().split('');
	return digits.map((digit) => parseInt(digit, 10));
};

const hasTwoEqualAdjacentDigits = (digits: number[]): boolean => {
	const indexOfEqualDigits = digits.findIndex((digit, i) => digit === digits[i + 1]);
	return indexOfEqualDigits !== -1;
};

const hasTwoEqualSeparateAdjacentDigits = (digits: number[]): boolean => {
	return digits.some((digit, i) => digit === digits[i + 1] && digit !== digits[i + 2]);
};

const hasDecreasingDigits = (digits: number[]): boolean => {
	const indexOfDecreasingDigit = digits.findIndex((digit, i) => digit > digits[i + 1]);
	return indexOfDecreasingDigit !== -1;
};
