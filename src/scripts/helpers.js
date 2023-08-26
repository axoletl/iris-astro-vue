export function ready (callback) {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(callback, 1)
  } else {
    document.addEventListener('DOMContentLoaded', callback)
  }
}

export function lerp (start, stop, amt) {
  return amt * (stop - start) + start
}

// event listener with the ability to remove itself
export function addEventListener (element, event, callback) {
  const wrapper = e => {
    callback(e, () => element.removeEventListener(event, wrapper))
  }
  element.addEventListener(event, wrapper)
}
