//Async
function display(val) {
    document.getElementById("demo").innerHTML = val;
}

async function myFunction() {
    return "Hello";
}

myFunction().then(function (val) {
    display(val);
})


//Async and Await
async function myDisplay() {
    let mypromise = new Promise(function (resolve) {
        resolve("Hey there");
    });
    document.getElementById("demo1").innerHTML = await mypromise;
}
myDisplay();

