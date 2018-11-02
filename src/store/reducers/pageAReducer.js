import {createHandleActionFn} from '../../assets/utils'
const DEFAULT_STATE = {
  pageName: 'pageA',
  list: [],
}

const handleAction = createHandleActionFn({
  SET_PAGE_NAME(state, action) {
    return Object.assign({}, state, {
      pageName: action.pageName
    })
  },
  SET_PAGE_A_LIST(state, action) {
    return {
      ...state, 
      list: action.list || [],
    }
  }
})
export default function (state = DEFAULT_STATE, action) {
  return handleAction(state, action)
}