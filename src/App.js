import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home';
import Contact from './routes/Contact';
import Service from './routes/Service';
import About from './routes/About';
import SignUp from './routes/SignUp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<SignUp/>} />

      </Routes>
      
    </div>
  );
}

export default App;
