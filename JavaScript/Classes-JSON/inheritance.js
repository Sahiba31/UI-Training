class Car {
    constructor(brand) {
        this.name = brand;
    }
    present() {
        return "I have a " + this.name;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    show() {
        return this.present() + " , it is a " + this.model;
    }
    static hello(x) {
        return "Hello! " + x.name;
    }
}

let obj = new Model("Ford", "Mustang");
document.getElementById("demo1").innerHTML = obj.show();
// document.getElementById("demo2").innerHTML = obj.hello();     //Cant do this

// document.getElementById("demo2").innerHTML = Model.hello();
document.getElementById("demo2").innerHTML = Model.hello(obj);