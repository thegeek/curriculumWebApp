'use strict';

angular.module('curriculumApp', [])
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
