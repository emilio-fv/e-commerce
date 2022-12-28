import React, { } from 'react';
import { Routes,Route } from 'react-router-dom';
import LoginReg from './views/LoginReg';
import Homepage from './views/Homepage';
import Products from './views/Products';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  
})

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={ <Homepage /> }/>
        <Route path='/products' element={ <Products /> }/>
        <Route path='/loginreg' element={ <LoginReg /> }/>
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
