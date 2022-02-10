var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    // $scope.firstname = "Sahiba";
    // $scope.lastname = "Goyal";
    $scope.master = { firstName: "Sahiba", lastName: "Goyal" };
    $scope.reset = function () {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});

