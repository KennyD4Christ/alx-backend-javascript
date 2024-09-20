// api.test.js
const request = require('request');
const { expect } = require('chai');
const server = require('./api'); // Import the running server

describe('Index page', function () {
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
});

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

// New test suite for available payments
describe('Available payments', function () {
  it('should return available payment methods', function (done) {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expected = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expected);
      done();
    });
  });
});

// New test suite for login
describe('Login', function () {
  it('should return welcome message with username', function (done) {
    request.post(
      {
        url: 'http://localhost:7865/login',
        body: JSON.stringify({ userName: 'Betty' }),
        headers: { 'Content-Type': 'application/json' },
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});
