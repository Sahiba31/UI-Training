function prod(x, y) {
    return x * y;
}

document.getElementById("demo").innerHTML = prod(2, 3);


const person = {
    firstName: "Sahiba",
    lastName: "Goyal",
    course: "MCA",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};


// document.getElementById("demo1").innerHTML = person.firstName;
document.getElementById("demo1").innerHTML = person.fullName();

function displayDate() {
    document.getElementById("demo2").innerHTML = Date();
}

