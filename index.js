module.exports = defile

/**
 * @name defile
 * @summary Generate component using passed file path and options.
 *
 * @description
 * The function generates component using passed file path and options.
 * By default it generates `a` link with the path as `href`.
 *
 * @param {Function} h
 * The helper function (e.g. `React.createElement` or Preact's `h`).
 *
 * @param {Object} href
 * The file path.
 *
 * @param {Object} [options]
 * The object with options.
 *
 * @param {String} [options.tag='a']
 * The tag name to use.
 *
 * @param {String} [options.prop='href']
 * The prop name to use.
 *
 * @param {Object} [options.defaultProps]
 * The default props.
 *
 * @returns {Object}
 * The generated component.
 *
 * @example
 * import { createElement } from 'react'
 * import photoPath from './photo.jpg'
 * import defile from 'defile'

 * // Basic usage
 * const Photo = defile(createElement, photoPath)
 * <Photo target='_blank'>Download my photo</Photo>
 * //=> <a href='/path/to/photo' target='_blank'>Download my photo</a>
 *
 * // Redefining the tag and the prop
 * const Photo = defile(createElement, photoPath, {tag: 'img', prop: 'src'})
 * <Photo alt='My pretty face' />
 * //=> <img src='/path/to/photo' alt='My pretty face' />
 *
 * // Usage with default props
 * const Photo = defile(createElement, photoPath, {
 *   defaultProps: { target: '_blank' }
 * })
 * <Photo>Download my photo</Photo>
 * //=> <a href='/path/to/photo' target='_blank'>Download my photo</a>
 */
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
