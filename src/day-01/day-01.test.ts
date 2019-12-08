import { calcFuel } from './day-01';
import { listOfMasses } from './day-01-masses';

test('A module of mass 14 requires 2 fuel', () => {
	expect(calcFuel(14)).toBe(2);
});

test('The total fuel required for a module of mass 1969 is 966 (654 + 216 + 70 + 21 + 5).', () => {
	expect(calcFuel(1969)).toBe(966);
});

test('The whole thing on the list of masses', () => {
	const sumOfAllFuel = listOfMasses
		.map((mass: string) => parseInt(mass, 10))
		.reduce((acc: number, mass: number) => acc + calcFuel(mass), 0);

	console.info('total fuel needed: ', sumOfAllFuel);
	// This is obviously not really a test since I don't know the output yet.
	// Would you write a different type of test for this, maybe with a mock function?
});
