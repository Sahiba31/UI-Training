const names = [
    "Sahiba",
    "Anu",
    "Komal",
    "Savi"
];

function check() {
    names.push("Tina");
    let len = names.length;
    let type = typeof names;
    document.getElementById("demo").innerHTML = names +
        "<br> Length of the array is: " + len +
        "<br> Type of the array is: " + type +
        "<br> For getting the output of type as array: " + Array.isArray(names);
}

function checkList() {
    names.pop();
    // names.shift();
    let len = names.length;
    names.sort();
    names.reverse();
    let text = "<ul>";

    for (let i = 0; i < len; i++) {
        text += "<li>" + names[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("demo1").innerHTML = text;
}

const numbers = [45, 4, 9, 16, 25];
let txt = "";

function iterate() {
    numbers.forEach(myFunction);
}

function myFunction(value) {
    txt += value + "<br>";
    document.getElementById("demo2").innerHTML = txt;

}