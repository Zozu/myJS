//Controller
var Model = require('./model.js');

module.exports = (function(){
	//simulates long time actions,like  HTTP-request
	var waitForThreeSeconds = function(value){
		return new Promise(function(resolve,reject){
			if(value === undefined){
				reject();
			}
			setTimeout(function() {
				resolve(value);
			}, 3000);
		});
	};

	function click(clickedValue){
		console.log("Controller: perform HTTP-request");
		waitForThreeSeconds(clickedValue).then(function(response){
			console.log("Controller: response received, send to model");
			Model.setValue(response);
		});
	}

	//facade
	return {
		click: click
	};

})();
