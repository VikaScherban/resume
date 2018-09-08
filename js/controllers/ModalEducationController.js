
resumeApp.controller('ModalInstanceEducationCtrl', function ($scope, $http, $uibModalInstance, educationItem) {
    $scope.selectedEducation = educationItem;

    var url = "resources/education_info.json";

    $http.get(url).success(function (data) {
        angular.forEach(data, function (item) {
            if (educationItem.id == item.educationid) $scope.educationInfo = item;
        })
    }).error(function (e) {
        alert("Error of get data.\n" + e);
    });

    //Close modal window
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});