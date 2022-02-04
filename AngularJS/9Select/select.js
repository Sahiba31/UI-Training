var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.names = ["Sahiba", "Anu", "Savi", "Komal", "Payal"];

    $scope.cars = [
        { model: "Ford Mustang", color: "red" },
        { model: "Fiat 500", color: "white" },
        { model: "Volvo XC90", color: "black" }
    ];

    $scope.carsObject = {
        car01: { brand: "Ford", model: "Mustang", color: "red" },
        car02: { brand: "Fiat", model: "500", color: "white" },
        car03: { brand: "Volvo", model: "XC90", color: "black" }
    };
});