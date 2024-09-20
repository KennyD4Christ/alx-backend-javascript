// api.test.js
const request = require('request');
const { expect } = require('chai');
const server = require('./api'); // Import the server

describe('Index page', function () {
  before(function (done) {
    // No need to start the server; it's already running
    done();
  });

  after(function (done) {
    // No need to close the server since it's managed externally
    done();
  });

  it('correct status code?', function (done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result?', function (done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('other?', function (done) {
    done();
  });
});

// New test suite for the cart page
describe('Cart page', function () {
  it('correct status code when :id is a number?', function (done) {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('correct status code when :id is NOT a number (=> 404)?', function (done) {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
