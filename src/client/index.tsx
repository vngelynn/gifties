import React from 'react';
import ReactDom from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App';

ReactDom.render(
  <Provider store={store}>
    <div>
      <h1>Hello World!!</h1>
    </div>
  </Provider>,
  document.getElementById('root')
);
