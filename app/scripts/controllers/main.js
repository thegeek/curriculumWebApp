'use strict';

angular.module('curriculumApp')
  .controller('MainCtrl', ['$scope','$routeParams','$locale',function ($scope,$routeParams,$locale) {
    if($routeParams.lang.toLowerCase() === 'en') {
      $locale.id = 'en-US';
      $scope.lang = 'en';
      $scope.isEnLocale = 'btn-info';
      $scope.isItLocale = 'btn-inverse';
    } else {
      $locale.id = 'it-IT';
      $scope.lang = 'it';
      $scope.isItLocale = 'btn-info';
      $scope.isEnLocale = 'btn-inverse';

    }
  }
]);
