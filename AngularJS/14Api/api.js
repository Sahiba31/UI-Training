var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.x1 = "Sahiba Goyal";
    $scope.x2 = angular.lowercase($scope.x1);
    $scope.x3 = angular.uppercase($scope.x1);
    $scope.x4 = angular.isString($scope.x1);
    $scope.x5 = angular.isNumber($scope.x1);
});