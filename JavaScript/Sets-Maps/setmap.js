function set() {
    const letters = new Set(["a", "b", "c"]);
    letters.add("d");
    letters.add("e");
    letters.delete("e");
    let res = "";
    letters.forEach(function (value) {
        res += value + "<br>";
    })
    document.getElementById("demo").innerHTML = res + letters.size;
}

function map() {
    const fruits = new Map([
        ["apple", 300],
        ["orange", 200],
        ["banana", 100]
    ]);
    fruits.set("kiwi", 500);
    fruits.delete("apple");

    let res = "";
    fruits.forEach(function (value, key) {
        res += key + " = " + value + "<br>";
    })

    document.getElementById("demo1").innerHTML = fruits.size + "<br>" +
        fruits.get("kiwi") + "<br>" +
        "Is Apple Present ? " + fruits.has("apple") + "<br>" +
        res;
}