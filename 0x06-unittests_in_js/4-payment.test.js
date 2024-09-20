// 4-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let spy;

  beforeEach(() => {
    // Stub the calculateNumber method to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log to verify the output
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    stub.restore(); // Restore the stub after the test
    spy.restore(); // Restore the spy after the test
  });

  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify the stub was called with the correct arguments
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Verify the console.log was called with the correct message
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
  });
});
