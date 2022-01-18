function check() {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 10) {
        greeting = "Good Morning";
    } else if (hour < 20) {
        greeting = "Good Day";
    } else {
        greeting = "Good Evening";
    }
    document.getElementById("demo").innerHTML = greeting;
}

function checkDay() {
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        default:
            day = "Weekend";
    }
    document.getElementById("demo1").innerHTML = day;
}


//For Of Loop
const numbers = [1, 2, 3, 4, 5];
let res = "";

for (let x of numbers) {
    res += x + "<br>";
}