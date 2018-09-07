resumeApp.controller('ExperienceCtrl', function ($scope, $http, $location) {
    var url = "resources/experience.json";

    $http.get(url).success(function (data) {
        $scope.experience = data;
    }).error(function (e) {
        alert("Error of get data.\n" + e);
    });

});