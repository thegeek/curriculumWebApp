'use strict';

angular.module('curriculumApp')
  .controller('HeaderCtrl', ['$scope','$routeParams',
    function ($scope,$routeParams) {
      $scope.user = {
          name:'Francesco Fienga',
          jobTitle:'WebDeveloper',
          img: {
              url:'img/avatar.png',
              placeHolder:'Personal Photo'
            },
            email:'f.fienga@gmail.com'
          };
    }
]);
