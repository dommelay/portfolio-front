import React from 'react'
import {UseState, UseEffect} from 'react'
import {Link, BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css';
import Resume from './components/Resume'
import Projects from './components/Projects'
import Home from './components/Home'
import About from './components/About'

const App = () => {

  return (
  <>

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/resume-education' element={<Resume/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
    </BrowserRouter>
    
  </>
  );
}

export default App;
