//Model
var ee = require('./eventEmitter.js');

module.exports = (function(){
	var storage = {
		value: null
	};

	function setValue(val) {
		storage.value = val;
		console.log("Model: the model has been updated, new value: " + val + ", emitting event");
		ee.emitEvent('modelChanged', [storage]);
	}
	function getStorage() {
		return storage;
	}

	//facade
	return {
		getStorage: getStorage,
		setValue: setValue
	};
})();