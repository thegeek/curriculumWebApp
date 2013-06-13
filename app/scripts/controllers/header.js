'use strict';

angular.module('curriculumApp')
  .controller('HeaderCtrl', function ($scope,$routeParams) {
    $scope.user = {
        name:'Francesco Fienga',
        jobTitle:'WebDeveloper',
        img:{
            'url':'http://dummyimage.com/64x64/4d494d/686a82.gif&text=Personal+Photo',
            'placeHolder':'Personal Photo'
        },
        email:'f.fienga@gmail.com'
    }
  });
