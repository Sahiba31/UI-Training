var app = angular.module("myApp", []);
app.filter('myFormat', function () {
    return function (x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
app.controller("myCtrl", function ($scope) {
    var employees = [
        { name: "Anu", dateOfBirth: new Date("January 1, 1999"), gender: "Female", salary: 50000.78 },
        { name: "Savi", dateOfBirth: new Date("February 2, 1999"), gender: "Female", salary: 70000 },
        { name: "Komal", dateOfBirth: new Date("March 3, 1999"), gender: "Female", salary: 60000 },
        { name: "Shubham", dateOfBirth: new Date("October 4, 1999"), gender: "Male", salary: 90000 },
        { name: "Gaurav", dateOfBirth: new Date("August 5, 1999"), gender: "Male", salary: 80000 },
    ];

    $scope.employees = employees;
    $scope.rowLimit = 3;
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
    $scope.sortColumn = "name";
    $scope.reverseSort = false;
    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
        }
        return '';
    }

    $scope.search = function (item) {
        if ($scope.searchText1 == undefined)
            return true;
        else {
            if (item.name.toLowerCase().indexOf($scope.searchText1.toLowerCase()) != -1 || item.gender.toLowerCase().indexOf($scope.searchText1.toLowerCase()) != -1)
                return true;
        }
        return false;
    }
});