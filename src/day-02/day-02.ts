export const runIntcodeProgram = (opCode: number[]): number[] => {
	const ADDITION = 1;
	const MULTIPLICATION = 2;
	const HALT = 99;
	for (let i = 0; i < opCode.length; i += 4) {
		switch (opCode[i]) {
			case ADDITION:
				opCode[opCode[i + 3]] = opCode[opCode[i + 1]] + opCode[opCode[i + 2]];
				break;
			case MULTIPLICATION:
				opCode[opCode[i + 3]] = opCode[opCode[i + 1]] * opCode[opCode[i + 2]];
				break;
			case HALT:
				return opCode;
		}
	}
	return opCode;
};
