import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/home/Home';
import registerServiceWorker from './registerServiceWorker';
import './index.css'
import {store} from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
