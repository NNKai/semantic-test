import React, { useState, useEffect } from 'react';
import './App.css';
import Components from './Components/Components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

function App() {
  const [auth, setAuth] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);

  useEffect(() => {
    // Check if username and password are in localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername === 'username' && storedPassword === 'password') {
      setAuth(true);
    }
  }, []); // Only run this effect once on component mount

  const fetchPaidData = (username, password, e) => {
    e.preventDefault();
    // Check username and password
    if (username === 'username' && password === 'password') {
      // Store username and password in localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      setAuth(true);
      setLoginPopup(false);
    }else{
      window.alert("username or password doesnt Match")
    }
  };

  const displayLogin = () => {
    setLoginPopup(true);
  };

  const closeButton = () => {
    setLoginPopup(false);
  };

  return (
      <div className="App">
        {/* Render the overlay when loginPopup is true */}
        {/* {loginPopup && <div className="overlay"></div>} */}
        <Components
          value={auth ? 'paid' : 'free'}
          fetchPaidData={fetchPaidData}
          displayLogin={displayLogin}
          closeButton={closeButton}
          loginPopup={loginPopup}
          setAuth={setAuth}
          auth={auth}
          />
      </div>
   
    
  );
}

export default App;
