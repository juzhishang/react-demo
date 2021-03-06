import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import ClickCounter from './ClickCounter'
import ControlPanel from './views/ControlPanel'
// 提供包含store的上下文
import  { Provider}  from 'react-redux'
import store from './Store'
// serviceWorker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ControlPanel />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
