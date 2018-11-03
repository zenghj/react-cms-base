import {SET_PROGRESS_BAR_VISIBLE} from '../actionTypes'

const config = {
  delay_ms: 100, // 延迟处理progress的时间，防抖
}

let progressBarQueue = []
let timer = null
function isFinalVisible(queue) {
  let trueCount = 0
  let falseCount = 0
  queue.forEach(val => {
    if(!!val === true) {
      trueCount++
    } else {
      falseCount++
    }
  })
  console.log('final handle', 'trueCount', trueCount, 'falseCount', falseCount, trueCount > falseCount ? 'show' : 'hide')
  return trueCount > falseCount
}
function handleProgressBarQueue (dispatch, visible) {
  progressBarQueue.push(visible)
  console.log(JSON.stringify(progressBarQueue))
  if(timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    dispatch({
      type: SET_PROGRESS_BAR_VISIBLE,
      visible: isFinalVisible(progressBarQueue)
    })
    timer = null
    progressBarQueue = []
  }, config.delay_ms)
}

export function hideProgressBar() {
  return dispatch => {
    handleProgressBarQueue(dispatch, false)
  }
  // return {
  //   type: SET_PROGRESS_BAR_VISIBLE,
  //   visible: false,
  // }
}

export function showProgressBar() {
  return dispatch => {
    handleProgressBarQueue(dispatch, true)
  }
  // return {
  //   type: SET_PROGRESS_BAR_VISIBLE,
  //   visible: true,
  // }
}