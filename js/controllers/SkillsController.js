resumeApp.controller('SkillsCtrl', function ($scope, $http, $location) {
    var url = "resources/skills.json";

    $http.get(url).success(function (data) {
        $scope.allSkills = Object.keys(data).map(function (index) {
            return data[index];
        });
        $scope.skills = $scope.allSkills.slice(0,9);
    }).error(function (e) {
        alert("Error of get data.\n" + e);
    });

    $scope.showMore = function () {
        var len = $scope.skills.length;
        var tolen = $scope.allSkills.length >=  $scope.skills.length + 6 ? $scope.skills.length + 6: $scope.allSkills.length;
        $scope.skills = $scope.skills.concat($scope.allSkills.slice(len, tolen));

        $scope.moreHide = $scope.skills.length == $scope.allSkills.length;
    }

});