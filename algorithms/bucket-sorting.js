//Bucket Sort


//
//BUG: cant stop
//

/**
 * @param  {Array} Incoming array
 * @param  {Func} Dividing handler
 * @return {Promise} Promise of sorting
 */
function bucketSort (array, handler) {
	//set up default handler
	if(typeof handler != "function") handler = SmallDigit;

	return sort({array: array, identifier: 0}, handler)
		.then(result => result.identifier);

	/**
	 * @param  {Ogbject} Incoming array with identifier
	 * @param  {Func} Function, that return number, by 
	 * @return {Promise} Puts sorted array to resolve-callback
	 */
	function sort(arrayObj, Handler) {
		//console.dir(arrayObj);
		//using promises for async processing
		return Promise.resolve().then(() => {
			var currentRoundArray = arrayObj.array;
			console.log(currentRoundArray);
			var identifier = arrayObj.identifier;

			//if incoming argument is not array, or its length == 0, thow error
			if(!Array.isArray(currentRoundArray) || currentRoundArray.length == 0) throw new Error("incoming value must be an array");
			//if array's length = 1, return array
			if(array.length == 1) return arrayObj;

			var getGroupIndex = new Handler(currentRoundArray).getGroupIndex;
			//divide array on groups by handler result
			var parts = [];
			currentRoundArray.forEach(item => {
				var index = getGroupIndex(item);
				if(parts[index]) {
					parts[index].push(item);
				}
				else {
					parts[index] = [item];
				}
			});

			//return sorted array, if handler return same value
			if(parts.length == 1) return {array: parts.pop(), identifier: identifier};

			//create recursive promise for each group
			var subPromises = parts.map((element, index) => sort({array: element, identifier: index}, Handler));
			//processing recursion
			return Promise.all(subPromises)
				.then(res => {
					var sortedArray = [];
					res.forEach(elem => sortedArray[elem.identifier] == elem.array);
					var mergedArray = [];
					//merge sorted parts into single array
					mergedArray.concat.apply(mergedArray, sortedArray);
					return ({array: sortedArray, identifier: identifier});
				});
		});
	}
}

/**
 * It is an interface to describe handlers
 * @param {Array} Incoming array
 */
function Handler (array) {
	if(!Array.isArray(array)) {
		throw new Error(this.constructor.name + ": first argument must be an array");
	}
	this.array = array;
	this.getGroupIndex = () => {
		throw new Error(this.constructor.name + ".getGroupIndex: this method should be rewrited");
	}
}
Handler.prototype.getGroupIndex = this.getGroupIndex;

/**
 * Divide array on groups by comparing from smallest to biggest digit's position (with prefix zeros)
 * Example: [10,12,14,22,24,60,78,201,436,8796] => [[[10,12,14],[22,24],[60],[78]],[[201],[436]],[[8796]]
 * Handler-interface implementation.
 * @param {Array}
 */
function SmallDigit(array){
	Handler.apply(this, arguments);
	var maxNum = Math.max.apply(null, this.array);
	this.digitCount = maxNum.toString().length;
	this.getGroupIndex = element => {
					console.dir(element);
		if(isNaN(element)) throw new Error("Value should be numeric");
		if(this.array.indexOf(element) < 0) throw new Error("Array not includes this value");
		return Math.floor(element / Math.pow(10, this.digitCount - 1));
	};
}

module.exports = {
	BucketSort: {
		Sorting: bucketSort,
		handlers: {
			SmallDigit: SmallDigit 
		}
	}
}