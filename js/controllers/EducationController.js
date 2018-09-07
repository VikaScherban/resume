resumeApp.controller('EducationCtrl', function ($scope, $http) {
    var url = "resources/education.json";

    $http.get(url).success(function (data) {
        $scope.education = data;
    }).error(function (e) {
        alert("Error of get data.\n" + e);
    });

});