function get() {
    var x = 5;
    let y = 2;
    let z = "5" + 2 + 3;
    let a = 5 + 2 + "3";
    {
        var x = 7;
        let y = 3;
    }
    var x;
    document.getElementById("demo").innerHTML = "The value of x, y, z and a respectively are: " + x + "</br>" + y + " </br>" + z + "</br> " + a;
}


function reDeclare() {
    let name = "Sahiba";
    // let name = 100;      Bcz we cant redeclare let
    lastName = "Goyal"
    document.getElementById("demo1").innerHTML = name + " " + lastName;
    // let lastName;
    var lastName;
}

function usingConst() {
    const PI = 3.14;
    const cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Toyota";
    cars.push("Audi");
    document.getElementById("demo2").innerHTML = PI + "</br>" + cars;
}