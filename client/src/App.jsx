import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import LoginReg from './views/LoginReg';
import Homepage from './views/Homepage';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Homepage /> }/>
      <Route path='/loginreg' element={ <LoginReg /> }/>
    </Routes>
    </>
  );
}

export default App;
