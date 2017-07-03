/* global describe, it */

const stub = require('./index')
const expect = require('chai').expect

describe('Stub Test', () => {
  describe('Type check', () => {
    it('Should be a function', () => {
      expect(stub).to.be.a('function')
    })
  })
})
