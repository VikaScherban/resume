resumeApp.controller('ExperienceCtrl', function ($scope, $http) {

    var url = "resources/experience.json";

    $http.get(url).success(function (data) {
        $scope.experience = data;
    }).error(function (e) {
        alert("Error of get data.\n" + e);
    });

    $scope.showDetail = function (exp, showDetailClick) {
        $scope.selectExp = exp;

        if (showDetailClick){
             getExperianceDetail(exp.id);
        }
    };

    $scope.isSelected = function (exp, showDetailClick) {
        return $scope.selectExp === exp &&  showDetailClick
    };

    function getExperianceDetail(id) {
        var url = "resources/portfolio.json";

        $http.get(url).success(function (data) {
            $scope.portfolio = data;
            angular.forEach(data, function (item) {
                if (item.educationid === id) {
                    $scope.experianceDetail = item;
                }
            })
        }).error(function (e) {
            alert("Error of get data.\n" + e);
        });
    }

});