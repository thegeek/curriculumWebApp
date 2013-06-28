'use strict';

describe('Service: personalData', function () {

  // load the service's module
  beforeEach(module('curriculumApp'));

  // instantiate service
  var personalData;
  beforeEach(inject(function (_personalData_) {
    personalData = _personalData_;
  }));

  it('should exists', function () {
    expect(!!personalData).toBe(true);
  });
  it('should have both languages', function (done) {
    expect(personalData.en).toBeDefined();
    expect(personalData.it).toBeDefined()
  });
});
