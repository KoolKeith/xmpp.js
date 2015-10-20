/* global describe, it */

'use strict'

var assert = require('assert')
var core = require('../index')
var Stanza = core.Stanza
var Message = core.Message

describe('Message', function () {
  it('is an instanceof Stanza', function () {
    var s = new Message()
    assert(s instanceof Stanza)
  })

  it('has "iq" as node name', function () {
    var s = new Message()
    assert(s.is('message'))
    assert.equal(s.name, 'message')
  })

  it('passes attrs argument down to Stanza', function () {
    var s = new Message({foo: 'bar'})
    assert.equal(s.attrs.foo, 'bar')
  })
})
