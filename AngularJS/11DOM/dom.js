var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    var employees = [
        { name: "Anu", dateOfBirth: new Date("January 1, 1999"), gender: "Female", salary: 50000 },
        { name: "Savi", dateOfBirth: new Date("February 2, 1999"), gender: "Female", salary: 70000 },
        { name: "Komal", dateOfBirth: new Date("March 3, 1999"), gender: "Female", salary: 60000 },
        { name: "Shubham", dateOfBirth: new Date("October 4, 1999"), gender: "Male", salary: 90000 },
        { name: "Gaurav", dateOfBirth: new Date("August 5, 1999"), gender: "Male", salary: 80000 },
    ];

    $scope.employees = employees;
})