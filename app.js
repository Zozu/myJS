'use strict';
let describe = require('mocha').describe,
	chai = require('chai'),
	bucketSort = require('./sortings/bucket-sort').BucketSort.Sorting,
	SmallDigitHandler = require('./sortings/bucket-sort').BucketSort.handlers.SmallDigit,
	//binarySearch
	binarySearch = require('./searches/binary-search.js').search,
	//bubbleSort
	bubbleSort = require('./sortings/bubble-sort.js').sort,
	//selectingSort
	selectingSort = require('./sortings/selecting-sort.js').sort;

/*bucketSort([10,11,20])
	.then(res => {console.log(res)})
	.catch(err => {console.log(err)});*/

let arr = [2,4,6,8,9,10,11,12,13,15,17,19,20],
	unsortedArr = [3,6,3,7,1,9,3,2,1,0,2,12,175,5,2],
	value = 4;

console.log('binarySearch');
console.log(binarySearch(arr, value));
console.log('bubbleSort');
console.log(bubbleSort(unsortedArr));
console.log('selectingSort');
console.log(selectingSort(unsortedArr));

