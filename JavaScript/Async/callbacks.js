//First Method - passing name of function as an argument to another function
function display(some) {
    document.getElementById("demo").innerHTML = some;
}

function calc(x, y, callback) {
    let sum = x + y;
    callback(sum);
}

calc(5, 5, display);

// --------------------------------------------------------------------------------
//Second Method - passing whole function as an argument to another function

setTimeout(function () { myFunc("Hey, my name is Sahiba"); }, 3000);

function myFunc(val) {
    document.getElementById("demo1").innerHTML = val;
}

setInterval(showTime, 1000);

function showTime() {
    let d = new Date();
    document.getElementById("demo2").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}


function showw(val) {
    document.getElementById("demo3").innerHTML = val;
}

function getFile(mycallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "hello.html");
    req.onload = function () {
        if (req.status == 200) {
            mycallback(req.response);
        } else {
            mycallback(req.status);
        }
    }
    req.send();
}

getFile(showw);