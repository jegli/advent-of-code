interface ICoordinate {
	x: number;
	y: number;
}

type Direction = 'U' | 'D' | 'L' | 'R';

export const getClosestIntersection = (wire1: string[], wire2: string[]): number => {
	const coordinatesWire1 = getCoordinates(wire1);
	const coordinatesWire2 = getCoordinates(wire2);
	const intersections = getIntersections(coordinatesWire1, coordinatesWire2);
	const manhattenDistances = getManhattenDistances(intersections);
	return Math.min(...manhattenDistances);
};

export const getFewestStepsToIntersection = (wire1: string[], wire2: string[]): number => {
	const coordinatesWire1 = getCoordinates(wire1);
	const coordinatesWire2 = getCoordinates(wire2);
	const intersections = getIntersections(coordinatesWire1, coordinatesWire2);
	return getMinimumCombinedSteps(coordinatesWire1, coordinatesWire2, intersections);
};

const getCoordinates = (wire: string[]): ICoordinate[] => {
	const coordinates: ICoordinate[] = [];
	let xCoord = 0;
	let yCoord = 0;
	const updateCoordinate = {
		D: () => yCoord--,
		L: () => xCoord--,
		R: () => xCoord++,
		U: () => yCoord++,
	};
	wire.forEach((instruction: string) => {
		for (let i = 0; i < getDistance(instruction); i++) {
			updateCoordinate[getDirection(instruction)]();
			coordinates.push({ x: xCoord, y: yCoord });
		}
	});
	return coordinates;
};

const getDirection = (instruction: string): Direction => {
	return instruction.slice(0, 1) as Direction;
};

const getDistance = (instruction: string): number => {
	return parseInt(instruction.slice(1), 10);
};

const getIntersections = (coordinatesWire1: ICoordinate[], coordinatesWire2: ICoordinate[]): ICoordinate[] => {
	return coordinatesWire1.filter((coord1) => {
		return coordinatesWire2.some((coord2) => coord1.x === coord2.x && coord1.y === coord2.y);
	});
};

const getManhattenDistances = (intersections: ICoordinate[]): number[] => {
	return intersections.map((intersection) => Math.abs(intersection.x) + Math.abs(intersection.y));
};

const getMinimumCombinedSteps = (
		coordinatesWire1: ICoordinate[],
		coordinatesWire2: ICoordinate[],
		intersections: ICoordinate[],
	): number => {
	return intersections.reduce((previous, current) => {
		const stepsWire1 = getNumberOfSteps(coordinatesWire1, current);
		const stepsWire2 = getNumberOfSteps(coordinatesWire2, current);
		return Math.min(previous, stepsWire1 + stepsWire2);
	}, Infinity);
};

const getNumberOfSteps = (coordinatesWire: ICoordinate[], current: ICoordinate) => {
	return coordinatesWire.findIndex((coordinate) => coordinate.x === current.x && coordinate.y === current.y) + 1;
};
