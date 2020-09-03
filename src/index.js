import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';


// import AuthorInfo from "./shinya-config.js"
import Root from './router/index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  <section className="mainBody">
    <Root />
  </section>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
