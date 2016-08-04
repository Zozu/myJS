// var1, just for fun :)
function BadAbsoluteFactory() {
	this.doBadThings = function(type){
		var evil = "new " + type + "();"
		return eval(evil);
	}
}
var badAbsoluteFactory = new BadAbsoluteFactory();
var firstResultOfBadThing = badAbsoluteFactory.doBadThings('FirstType');
var secondResultOfBadThing = badAbsoluteFactory.doBadThings('SecondType');
var thirdResultOfBadThing = badAbsoluteFactory.doBadThings('ThirdType');
var fourthResultOfBadThing = badAbsoluteFactory.doBadThings('FourthType');
console.log("bad implementation");
console.log(firstResultOfBadThing.name, secondResultOfBadThing.name, 
	thirdResultOfBadThing.name, fourthResultOfBadThing.name);

//var2
function AbsoluteFactory() {
	this.createObject = function(Class){
		return new Class();
		//or you can create instance of any other class and return it
	}
}
var absoluteFactory = new AbsoluteFactory();
var firstObject = absoluteFactory.createObject(FirstType);
var secondObject = absoluteFactory.createObject(SecondType);
var thirdObject = absoluteFactory.createObject(ThirdType);
var fourthObject = absoluteFactory.createObject(FourthType);
console.log("\n\rgood implementation");
console.log(firstObject.name, secondObject.name, thirdObject.name, fourthObject.name);


function FirstType() {
	this.name = this.constructor.name;
}
function SecondType() {
	this.name = this.constructor.name;
}
function ThirdType() {
	this.name = this.constructor.name;
}
function FourthType() {
	this.name = this.constructor.name;
}



