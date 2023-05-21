import React from 'react'
import {UseState, UseEffect} from 'react'
import './App.css';
import Resume from './components/Resume'
import Projects from './components/Projects';

const App = () => {
  const handleScroll = () => {
    window.scrollTo ({
      top: 800,
      behavior: 'smooth',
    })
  }


  return (
<>

    <div className="App">

<div id='homecontainer'>

      <div id='icons'>
        <a href='https://github.com/dommelay' target='_blank'>
          <img className='icon' src={process.env.PUBLIC_URL + '/images/github.png' } alt='icon'/>
        </a>
        <a href='mailto:melaydominique@gmail.com'>
          <img className='icon' src={process.env.PUBLIC_URL + '/images/gmail.png' } alt='icon'/>
        </a>
        <a href='https://www.linkedin.com/in/dominiquemelayclark/' target='_blank'>
          <img className='icon' src={process.env.PUBLIC_URL + '/images/linkedin.png' } alt='icon'/>
        </a>
        <a href='https://twitter.com/domsoftwaredev?lang=en' target='_blank'>
          <img className='icon' src={process.env.PUBLIC_URL + '/images/twitter.png' } alt='icon'/>
        </a>
      </div>

      <div id='headshotdiv'>
          <img id='headshot' src={process.env.PUBLIC_URL + '/images/headshot.png'} alt="Headshot" />
      </div>

      <div id='titlediv'>
        <h1 id='name'>Dominique Clark</h1>
        <h2 id='title'>Software Engineer</h2>
     

  
        <h4 id='brandstatement'>I have a passion for solving difficult problems and writing elegant code.</h4>
      </div>


</div>
      <img className='icon downarrow' src={process.env.PUBLIC_URL + '/images/down-arrow.png' } alt='icon' onClick={handleScroll}/>

    </div>
    <div>
      <Resume/>
    </div>
    <div>
      <Projects/>
    </div>

    </>
  );
}

export default App;
