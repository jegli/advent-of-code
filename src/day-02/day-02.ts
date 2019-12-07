export const runIntcodeProgram = (opCode: number[]): number[] => {
	const addition = 1;
	const multiplication = 2;
	const halt = 99;
	for (let i = 0; i < opCode.length; i+= 4) {
		if (opCode[i] === addition) {
			opCode[opCode[i+3]] = opCode[opCode[i+1]] + opCode[opCode[i+2]];
		} else if (opCode[i] === multiplication) {
			opCode[opCode[i+3]] = opCode[opCode[i+1]] * opCode[opCode[i+2]];
		} else if (opCode[i] === halt) {
			return opCode;
		}
	}
	return opCode;
}