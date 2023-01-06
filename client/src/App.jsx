import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginReg from './views/LoginReg';
import Homepage from './views/Homepage';
import Products from './views/Products';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

let theme = createTheme({ // Define theme colors and styles

});

theme = responsiveFontSizes(theme); // Make font sizes responsive

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme/>
            <Routes>
                <Route path='/' element={ <Homepage /> }/>
                <Route path='/products/:category' element={ <Products /> }/>
                <Route path='/account' element={ <LoginReg /> }/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;