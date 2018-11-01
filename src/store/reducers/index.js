import {combineReducers} from 'redux'
import common from './common'
import pageA from './pageAReducer'
import pageA_1 from './pageA_1Reducer'
import pageB from './pageBReducer'
import header from './header'

const rootReducer = combineReducers({
  common,
  pageA,
  pageA_1,
  pageB,
  header,
})

export default rootReducer