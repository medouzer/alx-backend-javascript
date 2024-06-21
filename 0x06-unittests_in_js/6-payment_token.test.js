const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
  it('should not resolve when success is false', function(done) {
    getPaymentTokenFromAPI(false)
      .then((result) => {
        done(new Error('Promise should not resolve when success is false'));
      })
      .catch(() => {
        done(new Error('Promise should not reject when success is false'));
      });
    setTimeout(() => {
      done();
    }, 100);
  });
});