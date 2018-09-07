resumeApp.controller('SkillsCtrl', function ($scope, $http, $location) {
    var url = "resources/skills.json";

    $http.get(url).success(function (data) {
        $scope.allSkills = data;
        $scope.skills = $scope.allSkills;
    }).error(function (e) {
        alert("Error of get data.\n" + e);
    });


});