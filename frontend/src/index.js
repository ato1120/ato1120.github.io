import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/js/breakpoints.min';
// import './assets/js/browser.min';
// import './assets/js/jquery.min';
// import './assets/js/jquery.scrollex.min';
// import './assets/js/jquery.scrolly.min';
// import './assets/js/main';
// import './assets/js/util'; 
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
