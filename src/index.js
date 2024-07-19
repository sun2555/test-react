//파일정보:src/index.js
import ReactDOM from 'react-dom/client';
import {App} from './step10/App'; //<---
import Login from './step15/login 01';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {console.log('render')}
    <Login/>
  </>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();