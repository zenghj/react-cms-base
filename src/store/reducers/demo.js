/**
 * this is a demo
 */

import {createHandleActionFn} from 'Assets/utils'
import {DEMO} from '../actionTypes'
const DEFAULT_STATE = {
  demo: 'Hello world'
}

const handleAction = createHandleActionFn({
  SET_DEMO(state, action) {
    return Object.assign({}, state, {
      demo: action.demo
    })
  },
})
export default function (state = DEFAULT_STATE, action) {
  return handleAction(state, action)
}