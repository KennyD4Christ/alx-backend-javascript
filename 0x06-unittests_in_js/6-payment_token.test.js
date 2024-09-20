// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Signal that the test is complete
      })
      .catch(done); // If there's an error, fail the test
  });

  it('should do nothing when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.be.undefined; // Response should be undefined
        done(); // Signal that the test is complete
      })
      .catch(done); // If there's an error, fail the test
  });
});
