import {TOGGLE_SIDEBAR_VISIBLE} from '../actionTypes'
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