module.exports = defile

function defile (h, href, options) {
  options = options || {}

  return function (props) {
    var tag = options.tag || 'a'
    var prop = options.prop || 'href'
    var tagProps = {}
    tagProps[prop] = href
    Object.assign(tagProps, props, options.defaultProps)
    delete tagProps.children
    var children = props && props.children
    var args = [tag, tagProps].concat(children || [])
    return h.apply(null, args)
  }
}
