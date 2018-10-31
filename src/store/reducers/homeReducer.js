import {createHandleActionFn} from '../../assets/utils'
const DEFAULT_STATE = {
  isLogined: false,
  user: {
    name: 'julian',
    age: 18,
  }
}

const handleAction = createHandleActionFn({
  SET_LOGINED(state, action) {
    return Object.assign({}, state, {
      isLogined: action.isLogined
    })
  },
  SET_USER_NAME(state, action) {
    const retState = {...state}
    retState.user.name = action.name
    return retState
  }
})
export default function homeReducer(state = DEFAULT_STATE, action) {
  return handleAction(state, action)
}