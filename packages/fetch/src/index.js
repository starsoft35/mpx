import XFetch from './xfetch'
let installed = false
function install (proxyMPX, options) {
  if (installed) return
  const xfetch = new XFetch(options)
  installed = true
  proxyMPX.xfetch = xfetch
  Object.defineProperty(proxyMPX.prototype, '$xfetch', {
    get () {
      return xfetch
    }
  })
}
export default {
  install,
  XFetch
}
