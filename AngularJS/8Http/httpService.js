var app = angular.module('httpApp', []);
app.controller('httpController', function ($scope, $http, $log) {
    $http({
        method: 'GET',
        url: "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=sibeeshvenu"
    }).success(function (response) {
        $scope.details = response.geonames;
        $log.info(response);
    }, function (reason) {
        $scope.error = reason.status;
        $log.info(reason);
    });
});