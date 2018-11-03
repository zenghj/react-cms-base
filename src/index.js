import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route , Router, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute'
import configureStore from './store';
import './index.css';
import App from './App';
import SignIn from './pages/SignIn';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* Route的顺序是有影响的 */}
          <Route path="/sign-in" exact component={SignIn}/> 
          <PrivateRoute path="/" component={Component} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}

render(App)

// HMR APP
// https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642
if(module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
