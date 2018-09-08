'use strict';

var resumeApp = angular.module('resumeApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

resumeApp.config(['$routeProvider', '$locationProvider', function ($routeProvide) {
    $routeProvide
        .when('/', {
            templateUrl: 'templates/info.html',
            controller: 'MainCtrl'
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

resumeApp.controller('MainCtrl', function ($scope, $http) {
    var url = "resources/info.json";
    $scope.menu = [
        {
            id: "1",
            text: "Main",
            href: "#/"
        },
        {
            id: "2",
            text: "Education",
            href: "#/education"
        },
        {
            id: "3",
            text: "Experience",
            href: "#/experience"
        },
        {
            id: "4",
            text: "Skills",
            href: "#/skills"
        }
    ];

    $scope.states = {};
    $scope.states.activeItem = '1';

    $http.get(url).success(function (data) {
            $scope.info = data;
    }).error(function (e) {
            alert("Error of get data.\n" + e);
    });

});

