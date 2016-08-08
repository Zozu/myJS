//Object.assign is from ES6. 
function Dispatcher() {
    this.handlers = {};
}
 
Object.assign(Dispatcher.prototype, {
    subscribe: function(event, handler) {
        if(!this.handlers[event]) {
            this.handlers[event] = [];
        }
        this.handlers[event].push(handler);
    },
    unsubscribe: function(event, handler) {
        this.handlers[event] = this.handlers[event].filter(
            function(item) {
                if (item !== handler) {
                    return item;
                };
            }
        );
    },
    emit: function(event, args) {
        this.handlers[event].forEach(function(item) {
            item(args);
        });
    }
});

function Airplane(name){
    this.name = name;
    this.state = "";
    this.fly = function() {
        this.state = "fly";
        console.log(this.name + " is flying now");
    };
    this.disableAirplaneElectronics = function(isReally) {
        if(isReally){
            this.state = "";
            console.log("good bye, " + this.name + "! :(");
        }
        else{
            console.log("oh, it's just a joke");
        }
    };
}

var dispatcher = new Dispatcher();
var plane1 = new Airplane("GoodPlane");
var plane2 = new Airplane("BadPlane");

dispatcher.subscribe("fly", plane1.fly.bind(plane1));
dispatcher.subscribe("fly", plane2.fly.bind(plane2));
dispatcher.subscribe("fall", plane2.disableAirplaneElectronics.bind(plane2));

dispatcher.emit("fly");
dispatcher.emit("fall", false);
dispatcher.emit("fall", true);
