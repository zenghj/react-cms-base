import {combineReducers} from 'redux'
import home from './homeReducer'
import pageA from './pageAReducer'
import pageA_1 from './pageA_1Reducer'
import pageB from './pageBReducer'
import header from './header'

const rootReducer = combineReducers({
  home,
  pageA,
  pageA_1,
  pageB,
  header,
})

export default rootReducer