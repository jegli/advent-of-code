interface ISpaceObject {
	source: string;
	orbit: string;
}

interface ISpaceObjectTreeNode {
	level: number;
	object: string;
}

export const getOrbitalTransfers = (path1: string[], path2: string[]) => {
	const firstMatchingOrbit = path1.find((orbit) => path2.includes(orbit));
	if (!firstMatchingOrbit) {
		return Infinity;
	}
	const index1 = path1.findIndex((orbit) => orbit === firstMatchingOrbit);
	const index2 = path2.findIndex((orbit) => orbit === firstMatchingOrbit);
	return index1 + index2;
};

export const getOrbitPath = (spaceObjects: ISpaceObject[], orbit: string) => {
	const orbitPath: string[] = [];
	let sourceForOrbit: string | undefined = orbit;
	while (sourceForOrbit !== 'COM') {
		sourceForOrbit = getSourceForOrbit(spaceObjects, sourceForOrbit);
		if (!sourceForOrbit) {
			return;
		}
		orbitPath.push(sourceForOrbit);
	}
	return orbitPath;
};

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

export const getSourceForOrbit = (spaceObjects: ISpaceObject[], orbit: string) => {
	return spaceObjects.find((spaceObject) => spaceObject.orbit === orbit)?.source;
};
