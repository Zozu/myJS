function Prototype() {
	this.proto = {};
	var self = this;

	function createClone() {
		this.proto = self.proto; 
		return this;
	}

	return {
		createClone: createClone
	}
}

var prototype = new Prototype();

//var1
var clone1 = prototype.createClone();

//var2
function Clone() {
	this.proto = prototype.createClone().proto;
}
var clone2 = new Clone();

prototype.proto.a = 3;
prototype.proto.b = 4;
console.log(clone1.proto);
console.log(clone2.proto);
