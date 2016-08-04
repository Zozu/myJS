function Entity() {
	this.name = this.constructor.name;
	var self = this;
	this.getName = function() {
		return self.name;
	}
}

function DecoratedEntity() {
	Entity.apply(this, arguments);
	this.someAdditionalFuncs = function(newName){
		this.name = newName;
	}
} 

var entity = new Entity();
console.log(entity.getName());

var decoratedEntity = new DecoratedEntity();
console.log(decoratedEntity.getName());

decoratedEntity.someAdditionalFuncs('NewName');
console.log(decoratedEntity.name);