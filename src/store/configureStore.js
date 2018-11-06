import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// HMR redux store 
// https://github.com/facebook/create-react-app/issues/2317
const configureStore = () => {
  
  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ))
  
  if (process.env.NODE_ENV !== 'production') {
    if(module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }
  return store
}

export default configureStore
