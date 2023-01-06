import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './views/Homepage';
import Products from './views/Products';
import ProductView from './views/ProductView';
import AdminPortal from './views/AdminPortal';
import UserPortal from './views/UserPortal';
import Cart from './views/Cart';
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
                <Route path='/products/:id' element={ <ProductView /> }/>
                <Route path='/cart' element={ <Cart /> }/>
                <Route path='/account' element={ <UserPortal /> }/>
                    {/* TODO: nested route for favorites*/}  
                <Route path='/admin' element={ <AdminPortal /> }/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;