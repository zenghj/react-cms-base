import {TOGGLE_SIDEBAR_VISIBLE, SET_PROGRESS_BAR_VISIBLE} from '../actionTypes'
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

export function hideProgressBar() {
  return {
    type: SET_PROGRESS_BAR_VISIBLE,
    visible: false,
  }
}

export function showProgressBar() {
  return {
    type: SET_PROGRESS_BAR_VISIBLE,
    visible: true,
  }
}

export function setPageAlist(list) {
  return {
    type: 'SET_PAGE_A_LIST',
    list,
  }
}