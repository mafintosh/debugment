#!/usr/bin/env node

const js = require.extensions['.js']
const path = require('path')

require.extensions['.js'] = function (module, file) {
  const c = module._compile

  module._compile = function (code, file) {
    code = code.replace(/\/\/ @debug /g, '')
    return c.call(this, code, file)
  }

  return js(module, file)
}

if (require.main === module) {
  require(path.resolve(process.argv[2]))
}
