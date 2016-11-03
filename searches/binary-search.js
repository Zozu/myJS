/**
 * Binary search
 */

'use strict';
function search(arr, value) {
	let l = 0,
		r = arr.length - 1,
		m;

		while(true) {
			if(l > r) return null;
			m = l + Math.floor((r - l) / 2);
			if(arr[m] < value) {
				l = m + 1;
				continue;
			}
			else if(arr[m] > value) {
				r = m - 1;
				continue;
			}
			else {
				return m;
			}
		}
}

module.exports = {
	search: search
}