const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    // Spy on console.log to verify the output
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore(); // Restore the spy after each test
  });

  it('should log the correct total for 100 and 20', () => {
    // Stub the calculateNumber method to return the expected result
    sinon.stub(Utils, 'calculateNumber').returns(120);

    sendPaymentRequestToApi(100, 20);

    // Verify the console.log was called with the correct message
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 120')).to.be.true;

    Utils.calculateNumber.restore(); // Restore the stub after the test
  });

  it('should log the correct total for 10 and 10', () => {
    // Stub the calculateNumber method to return the expected result
    sinon.stub(Utils, 'calculateNumber').returns(20);

    sendPaymentRequestToApi(10, 10);

    // Verify the console.log was called with the correct message
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 20')).to.be.true;

    Utils.calculateNumber.restore(); // Restore the stub after the test
  });
});
