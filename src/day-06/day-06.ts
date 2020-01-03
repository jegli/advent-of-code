interface ISpaceObject {
	source: string;
	orbit: string;
}

interface ISpaceObjectTreeNode {
	level: number;
	object: string;
}

export const getNumberOfOrbits = (orbits: string[]): number => {
	const spaceObjects = transformList(orbits);
	const spaceObjectQueue = [];
	const origin = spaceObjects.find((spaceObject) => spaceObject.source === 'COM') as ISpaceObject;
	spaceObjectQueue.push({ level: 1, object: origin.orbit });
	let orbitCount = 1;
	while (spaceObjectQueue.length) {
		const nextSpaceObjectFromQueue = spaceObjectQueue.shift() as ISpaceObjectTreeNode;
		const orbitsForSource = getOrbitsForSource(spaceObjects, nextSpaceObjectFromQueue.object).map((orbit) => {
			orbitCount += nextSpaceObjectFromQueue.level + 1;
			return { level: nextSpaceObjectFromQueue.level + 1, object: orbit };
		});
		spaceObjectQueue.push(...orbitsForSource);
	}
	return orbitCount;
};

export const transformList = (orbitList: string[]): ISpaceObject[] => {
	return orbitList.map((orbitMapping) => {
		const [source, orbit] = orbitMapping.split(')');
		return { source, orbit };
	});
};

export const getOrbitsForSource = (spaceObjects: ISpaceObject[], source: string) => {
	return spaceObjects.filter((spaceObject) => {
		return spaceObject.source === source;
	}).map((spaceObject) => spaceObject.orbit);
};
