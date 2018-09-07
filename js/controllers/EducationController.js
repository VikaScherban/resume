resumeApp.controller('EducationCtrl', function ($scope, $http, $location, GetService) {
    var url = "resources/education.json";

    $http.get(url).success(function (data) {
        $scope.info = data;
        console.log($scope.info);
    }).error(function (e) {
        alert("Error of get data.\n" + e);
    });
});