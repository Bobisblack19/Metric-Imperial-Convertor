const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  
  test('Test 10L: GET request to /api/convert', function (done) {
      chai
        .request(server)
        .get('/api/convert')
        .query({input:'10L'})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, "L");
          assert.equal(res.body.returnNum, 2.64172, 0.1);
          assert.equal(res.body.returnUnit, "gal")
          done();
        });
    });

    test('Test 32g: GET request to /api/convert', function (done) {
      chai
        .request(server)
        .get('/api/convert')
        .query({input:'32g'})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initUnit, undefined);
          done();
        });
    });

    test('Test 3/7.2/4kg: GET request to /api/convert', function (done) {
      chai
        .request(server)
        .get('/api/convert')
        .query({input:'3/7.2/4kg'})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, undefined);
          done();
        });
    });

    test('Test 3/7.2/4kilomegagram: GET request to /api/convert', function (done) {
      chai
        .request(server)
        .get('/api/convert')
        .query({input:'3/7.2/4kilomegagram'})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, undefined);
          assert.equal(res.body.initUnit, undefined);
          done();
        });
    });

    test('Test request with no number such as kg', function (done) {
      chai
        .request(server)
        .get('/api/convert')
        .query({input:'kg'})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 1);
          assert.equal(res.body.initUnit, "kg");
          assert.equal(res.body.returnNum, 2.20462, 0.1);
          assert.equal(res.body.returnUnit, "lbs");
          done();
        });
    });

});
