/* Lab: Unit Testing and Modules   Error Handling
4. Sum of Numbers */

function sum(arr) {
	let sum = 0;
	for (let num of arr) {
		sum += Number(num);
	}
	return sum;
}

console.log(sum([1, 2, 3]));
