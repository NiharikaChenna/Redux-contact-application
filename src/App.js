import React from 'react';
import {  Routes ,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />

    <Routes>
      <Route exact path='/' element={<Home/>} />
       
      
      <Route path='/add' element={<AddContact/>} />
      
      <Route path='/edit/:id' element={<EditContact/>}/>
       
    </Routes>
    </div>
  );
}

export default App;
