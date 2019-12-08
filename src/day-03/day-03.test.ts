import { getClosestIntersection, getFewestStepsToIntersection } from './day-03';
import { wire1, wire2 } from './day-03-wires';

test('if closest distance is 6', () => {
	const testWire1 = ['R8', 'U5', 'L5', 'D3'];
	const testWire2 = ['U7', 'R6', 'D4', 'L4'];
	expect(getClosestIntersection(testWire1, testWire2)).toBe(6);
});

test('if closest distance is 159', () => {
	const testWire1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
	const testWire2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];
	expect(getClosestIntersection(testWire1, testWire2)).toBe(159);
});

test('if closest distance is 135', () => {
	const testWire1 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
	const testWire2 = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];
	expect(getClosestIntersection(testWire1, testWire2)).toBe(135);
});

test('it on the real wires (getClosestIntersection)', () => {
	// it takes about 75s to run this on my machine... room for improvement 😅
	// const distance = getClosestIntersection(wire1.split(','), wire2.split(','));
	// console.info('manhatten distance to closest intersection', distance);
});

test('if fewest combined steps to intersection is 610', () => {
	const testWire1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
	const testWire2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];
	expect(getFewestStepsToIntersection(testWire1, testWire2)).toBe(610);
});

test('if fewest combined steps to intersection is 410', () => {
	const testWire1 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
	const testWire2 = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];
	expect(getFewestStepsToIntersection(testWire1, testWire2)).toBe(410);
});

test('it on the real wires (getFewestStepsToIntersection)', () => {
	const steps = getFewestStepsToIntersection(wire1.split(','), wire2.split(','));
	console.info('fewest combined number of steps to first intersection: ', steps);
});
