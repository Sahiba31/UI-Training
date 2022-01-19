//Anonymous Function (fn without name)
const x = function (a, b) { return a * b; }
document.getElementById("demo").innerHTML = x(4, 3);


//Self Invoking Function
(function () {
    document.getElementById("demo1").innerHTML = "Hello I called myself!!!";
})();


//Arrow Function
const y = (a, b) => a * b;
document.getElementById("demo2").innerHTML = y(5, 5);


//The argument object contains an array of the arguments used when the function was called.
function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max)
            max = arguments[i];
    }
    return max;
}
document.getElementById("demo3").innerHTML = findMax(1, 123, 500, 115, 44, 88);


//Default Parameters
function myFunc(x, y = 2) {
    /* if (y === undefined)
         y = 2;*/
    return x * y;
}
document.getElementById("demo4").innerHTML = myFunc(4);


//The JavaScript call() Method and apply() Method
const person = {
    fullName: function (course, city) {
        return this.firstName + " " + this.lastName + " , " + course + " , " + city;
    }
}
const person1 = {
    firstName: "Sahiba",
    lastName: "Goyal"
}
const person2 = {
    firstName: "Anu",
    lastName: "Goel"
}
//document.getElementById("demo5").innerHTML = person.fullName.call(person1);
document.getElementById("demo5").innerHTML = person.fullName.call(person1, "MCA", "Hyderabad");
// document.getElementById("demo5").innerHTML = person.fullName.apply(person1, ["MCA", "Hyderabad"]);


//Math.max() Method
document.getElementById("demo6").innerHTML = "Max Element is: " + " " + Math.max.apply(null, [1, 2, 4, 3]);


//Function Closures
const add = (function () {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
})();
function checkCount() {
    document.getElementById("demo7").innerHTML = add();
}
