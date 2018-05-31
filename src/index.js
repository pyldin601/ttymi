import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import reducers from './store/reducers';

import './index.css';
import 'xterm/dist/xterm.css';
import { getInitialApplicationState } from './store/state';

const store = configureStore(reducers, getInitialApplicationState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
