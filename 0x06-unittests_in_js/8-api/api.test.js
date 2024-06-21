const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const apiUrl = 'http://localhost:7865';

  it('correct status code', (done) => {
    request.get(apiUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct result', (done) => {
    request.get(apiUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('other: content type is text/html', (done) => {
    request.get(apiUrl, (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});
