'use strict';

var sliderRender = function(scope,iElement,tAttrs) {

  function firstLevelSlide(slides){
    angular.forEach(slides, function(slide,index) {
      var currentSlideDom = slideTemplate.clone();
      var title = titleTemplate.clone().text(slide.title);
      var firstLevelUl = firstLevelUlTemplate.clone();
      var points = slide.points;
      secondLevelSlide.call(self,points,firstLevelUl);
      currentSlideDom.append(title);
      currentSlideDom.append(firstLevelUl);
      iElement.append(currentSlideDom);
    });
  }

  function secondLevelSlide(points,elToAttach){


    angular.forEach(points, function(point,pointIndex){
          var pointLi = firstLevelLiTemplate.clone();
          if(pointIndex !== 0) {
            pointLi.addClass('slide');
          }
          var pointTitle = secondLevelTitleTemplate.clone().html(point.title);
          var secondLevelUl = firstLevelUlTemplate.clone();
          var subpoints = point.points;
          angular.forEach(subpoints, function(subpoint,indexSubPoint){
            var thirdLevelLi = firstLevelLiTemplate.clone().html(subpoint.title);
            secondLevelUl.append(thirdLevelLi);
          });
          pointLi.append(pointTitle);
          pointLi.append(secondLevelUl);
          elToAttach.append(pointLi);
        });
  }

  var slideTemplate = angular.element('<div></div>',{ class:'slide' });
  var titleTemplate = angular.element('<h2></h2>');
  var firstLevelUlTemplate = angular.element('<ul></ul>');
  var firstLevelLiTemplate = angular.element('<li></li>');
  var secondLevelTitleTemplate = angular.element('<span></span>');
  var slides = scope.$eval(tAttrs.slider);
  firstLevelSlide.call(self,slides);

}

angular.module('curriculumApp.directives',[])
  .directive('slider', [function () {
  return {
    priority: 0,
    template: '<div class="deck-container"></div>',
    replace: true,
    transclude: false,
    restrict: 'M',
    compile: function compile(tElement, tAttrs, transclude) {

      return {
        pre: function(scope,iElement, iAttrs,controller) {
          sliderRender.apply(this,arguments);
        },
        post: function() {
            jQuery.deck('.slide',{
                keys: {
                    next: [32,39],
                    previous: [37]
                  }
                });
          }
      };
    }
  };
}]);
