export const calcFuel = (mass: number): number => {
	if (mass === 0) {
		return 0;
	}
	const calculatedFuel = Math.floor(mass / 3) - 2;
	const neededFuel = calculatedFuel > 0 ? calculatedFuel : 0;
	return neededFuel + calcFuel(neededFuel);
};
