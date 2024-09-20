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
