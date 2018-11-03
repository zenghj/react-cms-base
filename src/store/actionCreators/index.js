/*
* 推荐所有action格式统一为
{
  type: [type],
  data: {
    
  }
}
*/

import {TOGGLE_SIDEBAR_VISIBLE, UPDATE_PAGE_C} from '../actionTypes'
export * from './progressBarVisible'

export function setLogin(isLogined) {
  return {
    type: 'SET_LOGINED',
    isLogined,
  }
}

 export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    name,
  }
}

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR_VISIBLE
  }
}

export function setPageAlist(list) {
  return {
    type: 'SET_PAGE_A_LIST',
    list,
  }
}


export function updatePageCAsync(content) {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: UPDATE_PAGE_C,
        data: {
          content,
        },
      })
    }, 1000)
  }
}