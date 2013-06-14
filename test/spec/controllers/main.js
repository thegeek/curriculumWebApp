'use strict';

describe('Controller: MainCtrl', function () {

  var MainCtrl,
    scope,routeParamsStub,locale;
  
  // load the controller's module
  beforeEach(module('curriculumApp'));

  var scope1 =  inject(function($controller,$rootScope){
        scope = $rootScope.$new();
        locale = jasmine.createSpy('locale');
        locale.id = 'impossible value';
        routeParamsStub = jasmine.createSpy('routeParamsStub');
        routeParamsStub.lang = 'it';
        MainCtrl = $controller('MainCtrl', {
          $scope: scope,
          $routeParams: routeParamsStub,
          $locale: locale
        });
      });
  var scope2 = inject(function($controller,$rootScope){
      scope = $rootScope.$new();
      locale = jasmine.createSpy('locale');
      locale.id = 'impossible value';
      routeParamsStub = jasmine.createSpy('routeParamsStub');
      routeParamsStub.lang = 'somestrangevalue';
      MainCtrl = $controller('MainCtrl', {
        $scope: scope,
        $routeParams: routeParamsStub,
        $locale: locale
      });
    });
  var scope3 = inject(function($controller,$rootScope){
      scope = $rootScope.$new();
      locale = jasmine.createSpy('locale');
      locale.id = 'impossible value';
      routeParamsStub = jasmine.createSpy('routeParamsStub');
      routeParamsStub.lang = '';
      MainCtrl = $controller('MainCtrl', {
        $scope: scope,
        $routeParams: routeParamsStub,
        $locale: locale
      });
    });
  
  it('should set lang application to IT', function (done) {
    scope1();
    expect(locale).toBeDefined();
    expect(locale.id).toBe('it-IT');
    expect(scope.lang).toBe('it');
    expect(scope.isItLocale).toBe('btn-info');
    expect(scope.isEnLocale).toBe('btn-inverse');
  });

  it('should set lang application to En in all other cases', function (done) {
    scope2();
    expect(locale).toBeDefined();
    expect(locale.id).toBe('en-US');
    expect(scope.lang).toBe('en');
    expect(scope.isEnLocale).toBe('btn-info');
    expect(scope.isItLocale).toBe('btn-inverse');
  });
  
  it('should set lang application to En in root too', function (done) {
    scope3();
    expect(locale).toBeDefined();
    expect(locale.id).toBe('en-US');
    expect(scope.lang).toBe('en');
    expect(scope.isEnLocale).toBe('btn-info');
    expect(scope.isItLocale).toBe('btn-inverse');
  });
  
});
