'use strict';

angular.module('curriculumApp',['curriculumApp.services','curriculumApp.directives']).
  config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/:lang', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
