resumeApp.controller('EducationCtrl', function ($scope, $http, $uibModal) {
    var url = "resources/education.json";

    $http.get(url).success(function (data) {
        $scope.education = data;
    }).error(function (e) {
        alert("Error of get data.\n" + e);
    });
    
    $scope.showModalInfo = function (event, item) {
        var modalInstanceEducationInfo = $uibModal.open({
            animation: $scope.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'templates/educationModal.html',
            controller: 'ModalInstanceEducationCtrl',
            controllerAs: '=',
            size: 'lg',
            appendTo: undefined,
            resolve: {
                educationItem: function () { return item; }
            }
        });
    }

});