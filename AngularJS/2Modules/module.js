var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    $scope.message = "Hi i am controller registered with module";
    $scope.student = {
        firstName: "Sahiba",
        lastName: "Goyal",
        course: "MCA",

        languages: [
            { name: "CPP", rate: 8 },
            { name: "JAVA", rate: 7 },
            { name: "GOLANG", rate: 6 }
        ],

        fullName: function () {
            var obj;
            obj = $scope.student;
            return obj.firstName + " " + obj.lastName;
        }
    };
});