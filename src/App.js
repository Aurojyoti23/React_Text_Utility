import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode ] = useState('light');
  const [alert, setAlert] = useState(null)
  // const [modeBtn, setModeBtn] = useState('dark');


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 4000);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      // if(modeBtn === 'dark'){
      //   setModeBtn('light')
      // }

      document.body.style.backgroundColor = 'rgb(20 30 30)';
      // document.body.textarea.style.boxShadow = '0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      // if(modeBtn === 'dark'){
      //   setModeBtn('light')
      // }
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'rgb(18 28 10)';
      showAlert('Light mode has been enabled', 'success')
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" /*modeBtn={modeBtn}*/ mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-5">
        {/* <Switch> */}

            {/* <Route exact path="/about" component = {About}>
              <About />
            </Route>

            <Route exact path="/"> */}
              <Form showAlert={showAlert} heading='Analyse your text👇🏻' />
            {/* </Route> */}

          {/* </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;