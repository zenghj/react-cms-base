import {createHandleActionFn} from 'Assets/utils'
import {UPDATE_PAGE_C} from '../actionTypes'
const DEFAULT_STATE = {
  content: 'Hello world'
}

const handleAction = createHandleActionFn({
  [UPDATE_PAGE_C](state, action) {
    return {
      ...state,
      ...action.data
    }
  },
})
export default function (state = DEFAULT_STATE, action) {
  return handleAction(state, action)
}