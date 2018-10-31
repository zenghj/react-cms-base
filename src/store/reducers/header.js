import {createHandleActionFn} from '../../assets/utils'
const DEFAULT_STATE = {
  sideBarVisible: true,
}

const handleAction = createHandleActionFn({
  TOGGLE_SIDEBAR_VISIBLE(state) {
    return {
      ...state,
      sideBarVisible: !state.sideBarVisible
    }
  }
})
export default function (state = DEFAULT_STATE, action) {
  return handleAction(state, action)
}