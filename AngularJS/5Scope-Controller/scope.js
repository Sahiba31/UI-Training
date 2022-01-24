/// reference path="angular.js" />

var app = angular.module("myApp", [])
app.run(function ($rootScope) {
    $rootScope.color = "Blue";
});
app.controller("myCtrl", function ($scope) {
    $scope.color = "Red";
});
app.controller("mySubCtrl", function ($scope) {
    $scope.color = "Purple";
});