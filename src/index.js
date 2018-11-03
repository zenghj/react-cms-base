import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route , Router, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute'



import store from './store';
import './index.css';
import App from './App';
import SignIn from './pages/SignIn'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* Route的顺序是有影响的 */}
        <Route path="/sign-in" exact component={SignIn}/> 
        <PrivateRoute path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
