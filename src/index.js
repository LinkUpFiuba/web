import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App className={style.body} />,
  document.getElementById('root')
);
registerServiceWorker();
