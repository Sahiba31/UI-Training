function compare() {
    let x = "Sahiba";
    let y = new String("Sahiba");
    let z = new String("Sahiba");

    let str = "Sahiba, Goyal, Progress";
    let slic = str.slice(15, 23);
    let subString = str.substring(15, 23);
    let subStr = str.substr(15, 5);
    document.getElementById("demo").innerHTML = typeof x + " " + typeof y + " " + typeof z + "</br>" +
        "Is x == y? " + (x == y) + "</br>" +
        "Is x === y? " + (x === y) + "</br>" +
        "Is y == z? " + (y == z) + "</br>" +
        "Is y === z? " + (y === z) + "</br>" +
        "Length of x is: " + x.length + "</br>" +
        slic + " " + subString + " " + subStr;

}

function methods() {
    let str = "Sahiba, Goyal, Progress";
    const myArray = str.split(',');
    document.getElementById("demo1").innerHTML = str.replace(/Progress/g, "Chef") +
        "<br> First element of array is: " + myArray[0];
}