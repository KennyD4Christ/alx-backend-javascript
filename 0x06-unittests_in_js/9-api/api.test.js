const request = require('request');
const app = require('./api');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

describe('Index page', () => {
  it('Correct status code?', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Correct result?', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

// New test suite for the cart page
describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    chai.request(app)
      .get('/cart/12')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Payment methods for cart 12');
        done();
      });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    chai.request(app)
      .get('/cart/hello')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Correct status code when :id is negative (=> 404)?', (done) => {
    chai.request(app)
      .get('/cart/-1')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
