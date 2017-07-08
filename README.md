---

<div align="center">
  <h1>electron-sane-cachepath</h1>
  <h2>set the electron cache path to a sane default for the current OS</h2>
  <p>
    <a href="https://npmjs.com/packages/electron-sane-cachepath" alt="npm package">
      <img src="https://img.shields.io/npm/v/electron-sane-cachepath.svg?style=flat-square">
    </a>
    <a href="https://github.com/blahah/electron-sane-cachepath/blob/master/LICENSE" alt="CC0 public domain">
      <img src="https://img.shields.io/badge/license-CC0-ff69b4.svg?style=flat-square">
    </a>
  </p>
</div>

---

Sets the `electron` and `chromium` app base cache paths to sane defaults:

- `macOS`: `~/Library/Caches`
- `windows`: `process.env.APPDATA`
- `linux`: `process.env.XDG_CACHE_HOME` or `~/.cache`

*note: the `cache` path is [now undocumented](https://github.com/electron/electron/commit/3d4318e15e757cf26377637ee1240d5b87cde39c) in `electron`, but it works as of electron `1.7.2`*

## Install

```
npm install --save electron-sane-cachepath
```

## Usage

Just pass your electron `app` to the module's exported function **before app emits 'ready'**.

``` js
const { app } = require('electron')
require('electron-sane-cachepath')(app)
```

An error will be thrown if:

- the `app` argument is missing
- the module is loaded in the renderer
- it is required on a platform other than `macOS`, `windows` or `linux`

## License

To the extent possible by law, we transfer any rights we have in this code to the public domain. Specifically, we do so using the [CC0 1.0 Universal Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).

You can do whatever you want with this code. No need to credit us, link to us, include any license, or anything else. But if you want to do those things, you're free to do that too.
