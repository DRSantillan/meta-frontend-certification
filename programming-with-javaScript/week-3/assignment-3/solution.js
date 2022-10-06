// Task 1
var dairy = [
	'cheese',
	'sour cream',
	'milk',
	'yogurt',
	'ice cream',
	'milkshake',
];
const logDairy = () => {
	for (values of dairy) {
		console.log(values);
	}
};
logDairy();
// Task 2
const animal = {
	canJump: true,
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

const birdCan = () => {
	for (prop of Object.keys(bird)) {
		console.log(`${prop}: ${bird[prop]}`);
	}
};
birdCan();
// Task 3
const animalCan = () => {
	for (props in bird) {
		console.log(`${props}: ${bird[props]}`);
	}
};
animalCan();
