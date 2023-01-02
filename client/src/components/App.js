import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className='container'>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/login' element= {<Login/>} />
          <Route path='/register' element= {<Register/>} />
        </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;