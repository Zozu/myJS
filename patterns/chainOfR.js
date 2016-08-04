function MyNumber(value) {
	this.number = value;
	var self = this;
	this.getValue = function() {
		return self.number;
	};
	return this.number;
}

MyNumber.prototype.plus = function(num){
	if(isNaN(num)){
		throw new Error("argument of 'plus' has not a numerical value");
	}
	else {
		this.number += num;
		return this;
	}
}

var count = new MyNumber(3);
console.log(count.getValue());

count.plus(2).plus(2).plus(3);
console.log(count.getValue());
