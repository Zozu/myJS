'use strict';
let describe = require('mocha').describe,
	chai = require('chai'),
	bucketSort = require('./sortings/bucket-sort').BucketSort.Sorting,
	SmallDigitHandler = require('./sortings/bucket-sort').BucketSort.handlers.SmallDigit,
	binarySearch = require('./searches/binary-search.js').search;

/*bucketSort([10,11,20])
	.then(res => {console.log(res)})
	.catch(err => {console.log(err)});*/

let arr = [2,4,6,8,9,10,11,12,13,15,17,19,20],
	value = 4;

console.log(binarySearch(arr, value));
