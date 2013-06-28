'use strict';

describe('Directive: slider', function () {


  var element;

  beforeEach(function(){
      module('curriculumApp')

    }
  );

  it('should have the correct structure', inject(function ($rootScope, $compile,personalData) {
    $rootScope.workinfo = personalData.en;
    element = angular.element('<!-- directive: slider workinfo.skills.slides -->');
    element = $compile(element)($rootScope);

    var slides = element.children();
    var firstSlide = slides[0];
    var firstSlideTitle = personalData.en.skills.slides[0].title;
    expect(slides.length).toEqual(7);
    expect(firstSlide.innerHTML).toContain(firstSlideTitle);
  }));
});
