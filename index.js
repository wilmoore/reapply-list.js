'use strict'

/*!
 * imports.
 */

var resolve = require('path').resolve
var reapply = require('reapply')

/*!
 * exports.
 */

module.exports = reapplyList

/**
 * Require a list of modules and apply the export if it is function.
 *
 * @param {String} modules
 * list of module names or relative paths.
 *
 * @param {String} args
 * arguments to pass to modules.
 *
 * @param {String} base
 * module base directory.
 *
 * @return {Array}
 * result of applying functions.
 */

function reapplyList (modules, args, base) {
  return modules.map(concat.bind(null, base)).map(reapply(args))
}

/**
 * Concatenate `base` and `moduleId` via `path.resolve`.
 *
 * @param {String} base
 * module base directory.
 *
 * @param {String} moduleId
 * module ID.
 *
 * @return {String}
 * `base` and `moduleId` concatenated.
 */

function concat (base, moduleId) {
  return resolve(base || '', moduleId)
}
