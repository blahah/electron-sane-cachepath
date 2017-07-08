const untildify = require('untildify')

module.exports = {
  macOS: untildify('~/Library/Caches'),
  windows: untildify(process.env.APPDATA),
  linux: untildify(process.env.XDG_CACHE_HOME || '~/.cache')
}
