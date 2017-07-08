const is = require('electron-is')
const cachepath = require('./cachepath')

if (!is.main()) throw new Error('electron-sane-cachepath must be required in the main process')

module.exports = app => {
  if (!app) throw new Error('app must be passed as first argument')

  const set = cachepath => app.setPath('cache', cachepath)

  if (is.macOS()) set(cachepath.macOS)
  else if (is.windows()) set(cachepath.windows)
  else if (is.linux()) set(cachepath.linux)
  else throw new Error('No sane cache path known for' + process.platform)
}
