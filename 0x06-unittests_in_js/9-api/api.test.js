const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);

describe('Index page', () => {
  it('should return the correct status code', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct result', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        chai.expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

// New test suite for the cart page
describe('Cart page', () => {
  it('should return the correct status code when :id is a number', (done) => {
    chai.request(app)
      .get('/cart/12')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        done();
      });
  });

  it('should return correct result when :id is a number', (done) => {
    chai.request(app)
      .get('/cart/12')
      .end((err, res) => {
        chai.expect(res.text).to.equal('Payment methods for cart 12');
        done();
      });
  });

  it('should return 404 when :id is NOT a number', (done) => {
    chai.request(app)
      .get('/cart/hello')
      .end((err, res) => {
        chai.expect(res).to.have.status(404);
        done();
      });
  });
});
