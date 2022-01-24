var myApp = angular.module("myApp", []);

myApp.controller("myCtrl", function ($scope) {
    var student = {
        firstName: "Sahiba",
        lastName: "Goyal",
        gender: "Female"
    };

    $scope.student = student;
});
