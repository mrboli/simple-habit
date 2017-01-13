import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './containers';

let store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
)

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
