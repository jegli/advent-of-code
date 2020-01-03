import { getNumberOfOrbits, getOrbitsForSource, transformList } from './day-06';
import { orbits } from './day-06-orbits';

const originalList = ['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L'];
const treatedList = [
	{ source: 'COM', orbit: 'B' },
	{ source: 'B', orbit: 'C' },
	{ source: 'C', orbit: 'D' },
	{ source: 'D', orbit: 'E' },
	{ source: 'E', orbit: 'F' },
	{ source: 'B', orbit: 'G' },
	{ source: 'G', orbit: 'H' },
	{ source: 'D', orbit: 'I' },
	{ source: 'E', orbit: 'J' },
	{ source: 'J', orbit: 'K' },
	{ source: 'K', orbit: 'L' },
];

test('transformList should return an array of Objects with source and orbit respecively', () => {
	expect(transformList(originalList)).toStrictEqual(treatedList);
});

test('getOrbitsForSource should return orbits ["C", "G"] for B', () => {
	expect(getOrbitsForSource(treatedList, 'B')).toStrictEqual(['C', 'G']);
});

test('the total number of orbits is 42', () => {
	expect(getNumberOfOrbits(originalList)).toBe(42);
});

test('the whole thing on the real data (as it turns out 308790 is the result)', () => {
	expect(getNumberOfOrbits(orbits)).toBe(308790);
});
