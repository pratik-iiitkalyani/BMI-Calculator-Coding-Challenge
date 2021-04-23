var expect  = require('chai').expect;
var request = require('request');

it('BMI Response', function(done) {
    request('http://localhost:6000/api/v1/bmiCalculator' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});