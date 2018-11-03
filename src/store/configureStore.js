import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import rootReducer from './reducers'

// HMR redux store 
// https://github.com/facebook/create-react-app/issues/2317
const configureStore = () => {
  const store = createStore(rootReducer, 
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
  
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
