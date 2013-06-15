'use strict';

angular.module('curriculumApp')
  .controller('HeaderCtrl', ['$scope','$routeParams',
    function ($scope,$routeParams) {
      $scope.user = {
          name:'Francesco Fienga',
          jobTitle:'WebDeveloper',
          img: {
              url:'http://dummyimage.com/64x64/4d494d/686a82.gif&text=Personal+Photo',
              placeHolder:'Personal Photo'
            },
            email:'f.fienga@gmail.com'
          };
    }
])
  .animation('header-animation-enter',function(){
    return {
      setup: function(element) {
        element.css({ opacity:0});
        var memo = 'test me';
        return memo;
      },
      start: function(element,done,memo){
        element.animate({
          opacity:1
        },function() { done(); });
      }
    }
  });
