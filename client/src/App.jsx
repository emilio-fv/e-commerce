import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Main from './views/Main';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <LandingPage /> }/>
      <Route path='/home' element={ <Main /> }/>
    </Routes>
    </>
  );
}

export default App;
