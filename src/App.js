import React from 'react';
import './App.scss';
import Footer from './components/footer'
import Header from './components/header'
import Body from './components/body'

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>            
    <Header/>
    <Body/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
