export function error(...args) {
  return console.error('[CMS]: ', ...args)
}

export function warn(...args) {
  return console.warn(...args)
}


export default {
  error,
  warn
}