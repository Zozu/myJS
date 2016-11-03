'use strict';
function sort(arr) {
	let temp, i, k, j, max, min;

	for(i = arr.length - 1, k = 0; i >= Math.ceil(arr.length / 2); i--, k++) {
		max = i;
		min = k;
		for (j = i; j >= k; j--) {
			if(arr[j] > arr[max]) max = j;
			if(arr[j] < arr[min]) min = j;
		}

		temp = arr[i];
		arr[i] = arr[max];
		arr[max] = temp;

		if(min == i) {
			min = max;
		}

		temp = arr[k];
		arr[k] = arr[min];
		arr[min] = temp;
	}

	return arr;
}

module.exports = {
	sort: sort
}