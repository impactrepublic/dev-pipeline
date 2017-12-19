const expect = require('chai').expect
const helper = require('./index')

describe('first test', () => {
  it('should return true', () => {
    expect(false).to.be.true
  });
});


describe('Reverse array module', () => {
  it('should return sentence with words in reverse', () => {
    var str = 'leo javier'
    var str2 = 'Maryann javier'

    expect(helper.reverseWords(str)).to.equal('oel reivaj')
    expect(helper.reverseWords(str2)).to.equal('nnayraM reivaj')
  });
});

