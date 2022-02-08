var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    var languages = [
        { name: "C++", likes: 0, dislikes: 0 },
        { name: "JAVA", likes: 0, dislikes: 0 },
        { name: "Golang", likes: 0, dislikes: 0 },
        { name: "JS", likes: 0, dislikes: 0 },
    ];

    $scope.languages = languages;

    $scope.incrementLikes = function (language) {
        language.likes++;
    }

    $scope.incrementDislikes = function (language) {
        language.dislikes++;
    }

    $scope.count = 0;

    $scope.myFunc = function (myE) {
        $scope.x = myE.clientX;
        $scope.y = myE.clientY;
    }
});