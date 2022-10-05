/**
 * Task 1
Write a "for" loop that will perform exactly the same repetitive code as this: 

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')

*/
for (var i = 1; i <= 5; i++) {
	console.log(i);
}
console.log('Counting Completed!');

/** Task 2 
Write a "for" loop that will perform exactly the same repetitive code as this:

console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1);
console.log('Countdown finished!');*/

for (var i = 5; i > 0; i--) {
	console.log(i);
}
console.log('Countdown finished!');

/** Task 3
Write a "while" loop that will perform exactly the same repetitive code as this:

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')



*/
var counter = 1;
while (counter <= 5) {
	console.log(counter);
	counter++;
}
console.log('Counting completed!');

/** Task 4
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')

var counter = 5;
while (counter >= 1){
    console.log(counter)
    counter--;
}
console.log('Countdown finished!')
*/
var counter = 5;
while (counter >= 1) {
	console.log(counter);
	counter--;
}
console.log('Countdown finished!');
/** Task 5
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)


*/
var year = 2018;

while (year >= 2018 && year <= 2022) {
	console.log(year);
	year++;
}
