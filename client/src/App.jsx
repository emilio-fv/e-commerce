import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginReg from './views/LoginReg';
import Main from './views/Main';
import Products from './views/Products';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import './App.css';

let theme = createTheme({
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={ <Main /> }/>
        <Route path='/products/:category' element={ <Products /> }/>
        {/* <Route path='/loginreg' element={ <LoginReg /> }/> */}
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
