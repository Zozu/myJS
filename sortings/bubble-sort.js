'use strict';

function sort(arr) {
	let n = arr.length, 
		i, temp,
		newValue;

	while(n != 0) {
		newValue = 0;
		for(i = 1; i <= n - 1; i++){
			if(arr[i - 1] > arr[i]) {
				temp = arr[i];
				arr[i] = arr[i-1];
				arr[i-1] = temp;
				newValue = i;
			}
		}
		n = newValue;
	}
	return arr;
}

module.exports = {
	sort: sort
}
