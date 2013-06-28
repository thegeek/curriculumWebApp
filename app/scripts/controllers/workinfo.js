'use strict';

angular.module('curriculumApp')
  .controller('WorkinfoCtrl', [ '$scope','$routeParams','personalData' , function ($scope, $routeParams,personalData) {
  var workinfo = personalData;
  $scope.lang = $scope.lang || 'en';
  if ($scope.lang === 'en') {
    $scope.workinfo = workinfo.en;
  } else {
    $scope.workinfo = workinfo.it;
  }

}]);

