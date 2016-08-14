var describe = require('mocha').describe,
	chai = require('chai'),
	bucketSort = require('./algorithms/sorting').BucketSort.Sorting,
	SmallDigitHandler = require('./algorithms/sorting').BucketSort.handlers.SmallDigit;

bucketSort([10,11,20])
	.then(res => {console.log(res)})
	.catch(err => {console.log(err)});