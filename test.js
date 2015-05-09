'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var reapplyList = require('./')

/*!
 * tests.
 */

test('reapplyList(modules, args, base)', function (t) {
  t.plan(1)
  var modules = [ 'hello', 'goodbye' ]
  var actual = reapplyList(modules, 'friend', './test/fixture/')
  var expected = ['Hello friend', 'Goodbye friend']
  t.deepEqual(actual, expected)
})

test('reapplyList(modules, args)', function (t) {
  t.plan(1)
  var modules = [ './test/fixture/hello', './test/fixture/goodbye' ]
  var actual = reapplyList(modules, 'friend')
  var expected = ['Hello friend', 'Goodbye friend']
  t.deepEqual(actual, expected)
})
