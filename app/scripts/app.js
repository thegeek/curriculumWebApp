'use strict';

angular.module('curriculumApp', ['$routeProvider'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:lang', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
