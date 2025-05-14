import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function run() {
  function callStack1() {
    console.log("this is callStack1");
    callStack2()
  }
  
  function callStack2() {
    console.log("this is callStack2");
  }
  
  
  
  setTimeout(() => console.log("setTimeout"), 0);
  new Promise((resolve) => resolve("resolve")).then(() => console.log("promise"));
  callStack1();  
}

let count = 0;
function loop() {
  setTimeout(loop, 0);
  count++
  if (count % 500 === 0) {
    run();
  }
}
// loop();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();