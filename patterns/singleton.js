//Patterns

//#Singleton - in ES5

//var1
var singleton = {
	num: 1,
	one: function(){return this.num;}
};

//var2
var Singleton = (function(){
	var staticVar;
	
	function privateFunc() {
		staticVar = 1;
	};
	function one() {
		return staticVar;
	};

	return {
		one: one
	};
})();
