class Name {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    fullName(course) {
        return this.fname + " " + this.lname + " " + course;
    }
}

const myName = new Name("Sahiba", "Goyal");
document.getElementById("demo").innerHTML = "My fullname is: " + myName.fullName("MCA") + "<br>" +
    myName.fname + myName.lname;


function jsonToJS() {
    let text = '{"students":[' +
        '{"firstName":"Sahiba","lastName":"Goyal" },' +
        '{"firstName":"Anu","lastName":"Goel" },' +
        '{"firstName":"Komal","lastName":"Rajrana" }]}';

    const obj = JSON.parse(text);
    document.getElementById("demo1").innerHTML =
        obj.students[1].firstName + " " + obj.students[1].lastName;
}