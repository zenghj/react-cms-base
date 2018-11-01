import {createHandleActionFn} from '../../assets/utils'
import {TOGGLE_SIDEBAR_VISIBLE, SET_PAGE_INITED} from '../actionTypes'
const DEFAULT_STATE = {
  sideBarVisible: true,
  pageInited: false,
}

const handleAction = createHandleActionFn({
  [TOGGLE_SIDEBAR_VISIBLE](state) {
    return {
      ...state,
      sideBarVisible: !state.sideBarVisible
    }
  },
  [SET_PAGE_INITED](state, inited = true) {
    return {
      ...state,
      pageInited: inited,
    }
  }
  
})
export default function (state = DEFAULT_STATE, action) {
  return handleAction(state, action)
}