import {createHandleActionFn} from '../../assets/utils'
const DEFAULT_STATE = {
  pageName: 'pageA'
}

const handleAction = createHandleActionFn({
  SET_PAGE_NAME(state, action) {
    return Object.assign({}, state, {
      pageName: action.pageName
    })
  }
})
export default function (state = DEFAULT_STATE, action) {
  return handleAction(state, action)
}