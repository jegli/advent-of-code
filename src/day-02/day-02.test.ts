import { runIntcodeProgram } from './day-02';
import { intcodeProgram } from './day-02-intcode-program';

test('if a short addition opcode works', () => {
	expect(runIntcodeProgram([1, 0, 0, 0, 99])).toStrictEqual([2, 0, 0, 0, 99]);
});

test('if a longer addition opcode works', () => {
	expect(runIntcodeProgram([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]))
		.toStrictEqual([3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]);
});

test('if a short multiplication opcode (2) works', () => {
	expect(runIntcodeProgram([2, 3, 0, 3, 99])).toStrictEqual([2, 3, 0, 6, 99]);
});

test('if another short multiplication (2) opcode works', () => {
	expect(runIntcodeProgram([2, 4, 4, 5, 99, 0])).toStrictEqual([2, 4, 4, 5, 99, 9801]);
});

test('if the halt opcode (99) works', () => {
	expect(runIntcodeProgram([1, 1, 1, 4, 99, 5, 6, 0, 99])).toStrictEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
});

test('run the intcode-program', () => {
	const copyOfIntCodeProgram = Array.from(intcodeProgram);
	// replacements according to riddle:
	copyOfIntCodeProgram[1] = 12;
	copyOfIntCodeProgram[2] = 2;
	const result = runIntcodeProgram(copyOfIntCodeProgram);
	console.info('value at postion 0 after program ran: ', result[0]);
});

test('find the values for address 1 and 2', () => {
	const valueToBeAtAddressOne = 19690720;
	for (let noun = 0; noun < 100; noun++) {
		for (let verb = 0; verb < 100; verb++) {
			const copyOfIntCodeProgram = Array.from(intcodeProgram);
			copyOfIntCodeProgram[1] = noun;
			copyOfIntCodeProgram[2] = verb;
			const result = runIntcodeProgram(copyOfIntCodeProgram);
			if (result[0] === valueToBeAtAddressOne) {
				return console.info('result is: ', 100 * noun + verb);
			}
		}
	}
});
