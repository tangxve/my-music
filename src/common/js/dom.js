export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

/**
 * getData 操作获取dom中属性的value
 * @param el dom元素
 * @param name 要获取属性的名字
 * @param val 如果有就get，没有就set这个属性
 * */
export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}

let elementStyle = document.createElement('div').style
// 浏览器
let vendor = (() => {
  let transFormNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'tarnsform'
  }
  for (let key in transFormNames) {
    if (elementStyle[transFormNames[key]] !== undefined) {
      return key
    }
  }
  return false
})()

export function prefixStyle(style) {
  // 浏览器有问题
  if (vendor === false) {
    return false
  }
  // 本来浏览器 不用加浏览器前缀
  if (vendor === 'standard') {
    return style
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

//
// export function prefixStyle(style) {
//   if (vendor === false) {
//     return false
//   }
//
//   if (vendor === 'standard') {
//     return style
//   }
//
//   return vendor + style.charAt(0).toUpperCase() + style.substr(1)
// }
