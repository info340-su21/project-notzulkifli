import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import firebase from 'firebase/app';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBBYuHRWmcYunbq9UjGT3d2Z-mBFOSx5c4",
  authDomain: "mobile-nutrition1.firebaseapp.com",
  projectId: "mobile-nutrition1",
  storageBucket: "mobile-nutrition1.appspot.com",
  messagingSenderId: "337831355056",
  appId: "1:337831355056:web:1c32781606baf3f6d99175"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
