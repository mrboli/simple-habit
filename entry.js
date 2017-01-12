import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
//import App from './components/App'

let store = createStore(reducers);

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}


render(
    <Provider store={store}>
      <Hello />
    </Provider>,
    document.getElementById('root')
);
