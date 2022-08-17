export const prettyNum = (str) => {
  str = '' + str
  return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
}
export const unprettyNum = (str) => {
  return Number(str.replace(/\s+/g, ''))
}
export const throttle = (func, ms) => {
  let isThrottled = false
  let savedArgs
  let savedThis
  function wrapper () {
    if (isThrottled) {
      savedArgs = arguments
      savedThis = this
      return
    }
    func.apply(this, arguments)
    isThrottled = true
    setTimeout(function () {
      isThrottled = false
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }
  return wrapper
}
export const declension = (number, titles) => {
  let cases = [1, 0, 2, 2, 2, 1]
  return titles[ (number % 100 > 4 && number % 100 < 20) ? 1 : cases[(number % 10 < 5) ? number % 10 : 5] ]
}

export const getCoords = (elem) => {
  const box = elem.getBoundingClientRect()
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  }
}
