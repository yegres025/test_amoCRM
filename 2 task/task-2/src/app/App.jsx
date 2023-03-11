import './App.css'
import { Header } from '../header/Header';
import { MainSpace } from '../mainSpace/MainSpace';
import { BottomSpace } from '../bottomSpace/BottomSpace';
import { Footer } from '../footer/Footer';
import React from 'react';

function App() {
  return (
    <div className='wrapper'>
    <Header /> 
    <MainSpace />
    <BottomSpace />
    <Footer />
    </div>
  )
}

export { App };
