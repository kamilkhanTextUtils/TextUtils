import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

// let name="Kamil"

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled ", "Success");
      document.title = ' TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled ", "Success");
      document.title = 'TextUtils - Light Mode';
    }

  }


  return (
    <>

      <BrowserRouter>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3" >
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} />
          </Routes>
        </div>

      </BrowserRouter>



    </>
  );
}


export default App;
