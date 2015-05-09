# reapply-list
> Require a list of modules and apply the export if it is function.

[![Build Status](http://img.shields.io/travis/wilmoore/reapply-list.js.svg)](https://travis-ci.org/wilmoore/reapply-list.js) [![Code Climate](https://codeclimate.com/github/wilmoore/reapply-list.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/reapply-list.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install reapply-list --save
```

###### npm stats

[![npm](https://img.shields.io/npm/v/reapply-list.svg)](https://www.npmjs.org/package/reapply-list) [![NPM downloads](http://img.shields.io/npm/dm/reapply-list.svg)](https://www.npmjs.org/package/reapply-list) [![Dependency Status](https://gemnasium.com/wilmoore/reapply-list.js.svg)](https://gemnasium.com/wilmoore/reapply-list.js)

## API Example

###### index.js

```js
var app = {}
var reapply = require('reapply-list')
var configs = ['cors', 'basic-auth', 'router']

reapply(configs, [app], './app/config')
```

###### app/config/*.js

```js
module.exports = function (app) {
  // configure `app` here.
}
```

## Features

 - Supports optional arguments.
 - Supports optional base directory.

## API

### `reapplyList(list[, args][, base])`

###### arguments

 - `list: (Array)` list of module names or relative paths to require.
 - `[args]: (Array)` arguments to pass to modules.
 - `[base]: (String)` module base directory.

###### returns

 - `(Array)` result of applying functions..

## Alternatives

 - Use [reapply.js](https://www.npmjs.com/package/reapply) if you need something slightly different or need more control.

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/reapply-list.js.svg)](https://github.com/wilmoore/reapply-list.js/blob/master/license)
