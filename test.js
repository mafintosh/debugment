const tape = require('tape')
const { spawnSync } = require('child_process')

tape('run without', function (t) {
  const { stdout } = spawnSync(process.execPath, [ 'example.js' ])
  t.same(stdout.toString().trim(), '42')
  t.end()
})

tape('run with', function (t) {
  const { stdout } = spawnSync(process.execPath, [ '-r', './index.js', 'example.js' ])
  t.same(stdout.toString().trim().replace(/\r/g, ''), 'calling hello\n42')
  t.end()
})
