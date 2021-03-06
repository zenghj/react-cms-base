import {error} from './log'
// import logUtil from './log'
export * from './log'


export function isArray(obj) {
  return Array.isArray(obj);
}

export function isFunction(obj) {
  return typeof obj === 'function';
}


export function createHandleActionFn(actionMap) {
  return function handleAction(state, action) {
    if (!action) return state;
    const type = action.type;
    const handler = actionMap[type]

    if(isFunction(handler)) {
      const newState = handler(state, action)
      // console.log(newState)
      return newState
    } else {
      // logUtil.warn(`action not found, type: ${type}`) 
      // 即使combineReducer之后，action.type并不是分模块的
      // 会遍历各个reducer函数处理action
      // 也就是说如果不同的reducer模块处理了相同type的action的话，当dispatch时会有多处依次处理这个action
      return state;
    }
  };
}

export function assert(detectFn, ...rest) {
  if(isFunction(detectFn)) {
    let ret = detectFn(...rest)
    if(!ret) {
      error('assertion not pass', `judgement fn: ${detectFn.name || 'anonymous'}`, 'Target: ', rest)
    }
    return !!ret;
  } else {
    error('the first argument of assert should be a judgement function')
    return false
  }
}