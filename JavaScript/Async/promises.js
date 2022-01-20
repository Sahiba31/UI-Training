//first
function display(val) {
    document.getElementById("demo").innerHTML = val;
}

let mypromise = new Promise(function (myresolve, myreject) {
    let x = 0;
    if (x == 0)
        myresolve("OK");
    else
        myreject("Error");
});

mypromise.then(
    function (value) { display(value); },
    function (error) { display(error); }
)


//second
const myProm = new Promise(function (myresolve, myreject) {
    setTimeout(function () { myresolve("Hii My name is Sahiba"); }, 3000);
});

myProm.then(function (value) {
    document.getElementById("demo1").innerHTML = value;
});