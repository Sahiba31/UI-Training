var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $location, $timeout, $interval) {
    $scope.URL = $location.absUrl();
    $scope.myHeader = "Hello World";
    $scope.theTime = new Date().toLocaleTimeString();

    $timeout(function () {
        $scope.myHeader = "Hey look i changed after exactly 2 seconds";
    }, 2000);

    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);

    $scope.transformString = function (input) {
        if (!input)
            return input;

        var output = "";
        for (var i = 0; i < input.length; i++) {
            if (i > 0 && input[i] == input[i].toUpperCase())
                output += " ";
            output += input[i];
        }
        $scope.output = output;
    };
});