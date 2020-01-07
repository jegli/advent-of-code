import { getNumberOfOrbits, getOrbitalTransfers, getOrbitPath, getOrbitsForSource, transformList } from './day-06';
import { orbits } from './day-06-orbits';

const originalList = ['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L', 'K)YOU',
'I)SAN'];
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
	{ source: 'K', orbit: 'YOU' },
	{ source: 'I', orbit: 'SAN' },
];

// Part 1
test('transformList should return an array of Objects with source and orbit respecively', () => {
	expect(transformList(originalList)).toStrictEqual(treatedList);
});

test('getOrbitsForSource should return orbits ["C", "G"] for B', () => {
	expect(getOrbitsForSource(treatedList, 'B')).toStrictEqual(['C', 'G']);
});

test('the total number of orbits is 42', () => {
	expect(getNumberOfOrbits(originalList)).toBe(54);
});

test('the whole thing on the real data (as it turns out 308790 is the result)', () => {
	expect(getNumberOfOrbits(orbits)).toBe(308790);
});

// Part 2
test('getOrbitPath returns an array containing the path of K', () => {
	expect(getOrbitPath(treatedList, 'K')).toStrictEqual(['J', 'E', 'D', 'C', 'B', 'COM']);
});

test('getOrbitPath returns an array containing the path of I', () => {
	expect(getOrbitPath(treatedList, 'I')).toStrictEqual(['D', 'C', 'B', 'COM']);
});

test('getOrbitalTransfers returns the amount of orbital transfers needed (6 from L to H)', () => {
	const path1 = getOrbitPath(treatedList, 'L') as string[];
	const path2 = getOrbitPath(treatedList, 'H') as string[];
	expect(getOrbitalTransfers(path1, path2)).toBe(6);
});

test('getOrbitalTransfers returns the amount of orbital transfers needed (6 from YOU to SAN)', () => {
	const path1 = ['SAN', 'I', 'D', 'C', 'B', 'COM'];
	const path2 = ['YOU', 'K', 'J', 'E', 'D', 'C', 'B', 'COM'];
	expect(getOrbitalTransfers(path1, path2)).toBe(6);
});

test('getOrbitalTransfers between YOU and SAN on puzzle input (outputs 472)', () => {
	const transformedOrbits = transformList(orbits);
	const you = getOrbitPath(transformedOrbits, 'SAN') as string[];
	const san = getOrbitPath(transformedOrbits, 'YOU') as string[];
	expect(getOrbitalTransfers(you, san)).toBe(472);
});
