//View
var ee = require('./eventEmitter.js');
var Controller = require('./controller.js');

module.exports = (function() {
	function updateView(updatedValue) {
		console.log('View: event catched, view updated, value: ' + updatedValue.value);
		//document.getElementById("app").innerHTML = updatedValue;
	};

	function click(value) {
		console.log("View: click(" + value + ")");
		Controller.click(value);
	};
	

	ee.addListener('modelChanged', updateView);

	//facade for HTML
	return {
		processClick: click
	}
})();


