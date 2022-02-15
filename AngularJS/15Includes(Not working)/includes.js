var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    var employees = [
        { name: "Anu", gender: "Female", salary: 50000 },
        { name: "Savi", gender: "Female", salary: 70000 },
        { name: "Komal", gender: "Female", salary: 60000 },
        { name: "Shubham", gender: "Male", salary: 90000 },
        { name: "Gaurav", gender: "Male", salary: 80000 },
    ];

    $scope.employees = employees;
    $scope.employeeView = "employeeTable.html";
});