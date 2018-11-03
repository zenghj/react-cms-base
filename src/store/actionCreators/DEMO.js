/**
 * this is a demo
 */

import {SET_DEMO, SET_DEMO_ASYNC} from '../actionTypes'

export function setDemo(payload) {
  return {
    type: SET_DEMO,
    data: payload
  }
}

export function setDemoAsync(payload) {
  return dispatch => {
    // do some async operation
    let asyncData
    dispatch({
      type: SET_DEMO_ASYNC,
      data: asyncData,
    })
  }
}