'use strict';
function sortMax(start, end, array){
	if(start == end) return array;

	let temp, i;

	for(i = start; i < end; i++){
		if(array[i] > array[i+1]) {
			temp = array[i];
			array[i] = array[i+1];
			array[i+1] = temp;
		}
	}

	return sortMin(start, end - 1, array);
}

function sortMin(start, end, array) {
	if(start == end) return array;

	let temp, i;

	for (i = end; i > start; i--) {
		if(array[i] < array[i-1]) {
			temp = array[i];
			array[i] = array[i-1];
			array[i-1] = temp;
		}
	}

	return sortMax(start + 1, end, array);
}

function sort(arr) {
	return sortMax(0, arr.length - 1, arr);
}

/**
 * Test
 */

let myArr = [3,2,1,4,5,7,23,246,1,36,2,2,6,323];
console.log(sort(myArr));

