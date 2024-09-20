// 3-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    spy.restore(); // Always restore the original function after the test
  });

  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Check if the spy was called once
    expect(spy.calledOnce).to.be.true;
    
    // Validate the arguments passed to Utils.calculateNumber
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
