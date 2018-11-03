import {createHandleActionFn} from '../../assets/utils'
import {TOGGLE_SIDEBAR_VISIBLE, SET_PAGE_INITED,SET_PROGRESS_BAR_VISIBLE} from '../actionTypes'

const DEFAULT_STATE = {
  isLogined: true,
  isProgressBarVisible: false,
  user: {
    name: 'julian',
    age: 18,
  },
  sideBarVisible: true,
  pageInited: false,
}

const handleAction = createHandleActionFn({
  SET_LOGINED(state, action) {
    return Object.assign({}, state, {
      isLogined: action.isLogined || true
    })
  },
  SET_USER_NAME(state, action) {
    const retState = {...state}
    retState.user.name = action.name
    return retState
  },
  [SET_PROGRESS_BAR_VISIBLE](state, action) {
    let nextState = {...state}
    if(nextState.isProgressBarVisible !== action.visible) {
      // console.log('SET_PROGRESS_BAR_VISIBLE', action.visible)
      nextState.isProgressBarVisible = action.visible
    }
    return nextState
  },
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
export default function homeReducer(state = DEFAULT_STATE, action) {
  return handleAction(state, action)
}