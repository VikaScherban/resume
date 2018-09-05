'use strict';

var resumeApp = angular.module('resumeApp', [ngRoute, ngResource]);

resumeApp.config(['$routeProvider', '$locationProvider', function ($routeProvide) {
    $routeProvide
        .when('/', {
            templateUrl: 'templates/info.html',
            controller: 'InfoCtrl'
        })
        .when('/education', {
            templateUrl: 'templates/education.html',
            controller: 'EducationCtrl'
        })
        .when('/experience', {
            templateUrl: 'templates/experience.html',
            controller: 'ExperienceCtrl'
        })
        .when('/skills', {
            templateUrl: 'templates/skills.html',
            controller: 'SkillsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


resumeApp.controller('resumeCtrl', function ($scope, $http, $location, GetService) {

});

resumeApp.service('GetService', function ($http) {
    this.getHttp = function (url) {
        $http.get(url).success(function (data) {
            return data;
        }).error(function (e) {
            alert("Error of get data.\n" + e);
            return [];
        });
    }
});

resumeApp.directive("infoDirective", function () {
   return{
       templateUrl: "templates/info.html"
   }
});

resumeApp.controller('InfoCtrl', function ($scope) {
   $scope.info = GetService.getHttp("resources/info.json");

});