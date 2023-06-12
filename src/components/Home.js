import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const Home = () => {



    return (

        <>
        
        <div className='navcontainer'>
            <Link to={'/'}>
                <h4 className='navelement'>Home</h4>
            </Link>
            <Link to={'/resume-education'}>
                <h4 className='navelement'>Resume</h4>
            </Link>
            <Link to={'/projects'}>
                <h4 className='navelement'>Projects</h4>
            </Link>
            <Link to={'/about'}>
                <h4 className='navelement'>About</h4>
            </Link>
        </div>

    <div className="App">

    <div id='homecontainer'>

      <div id='titlediv'>
        <h1 id='name'>Dominique Clark</h1>
        <h2 id='title'>Software Engineer</h2>
        <div className='brandstate' style={{margin: 0}}>
        <h4 id='brandstatement'>I am a Full-Stack Software Engineer with a background in Biopsychology, Neuroscience, and pre-med studies. My university course work has shaped me to be highly analytical and has helped me to develop excellent logic and reasoning skills. I am driven by complexity, and have a passion for solving difficult problems and writing elegant code. 
        </h4>
        </div>
        <div id='icons'>
            <a href='https://github.com/dommelay' target='_blank'>
                <img className='icon github' src={process.env.PUBLIC_URL + '/images/githubcolor.png' } alt='icon'/>
            </a>
            <a href='https://www.linkedin.com/in/dominiquemelayclark/' target='_blank'>
            <img className='icon linkedin' src={process.env.PUBLIC_URL + '/images/linkedincolor.png' } alt='icon'/>
            </a>
            <a href='https://twitter.com/domsoftwaredev?lang=en' target='_blank'>
                <img className='icon twitter' src={process.env.PUBLIC_URL + '/images/twittercolor.png' } alt='icon'/>
            </a>
            <a href='mailto:melaydominique@gmail.com'>
                <img className='icon gmail' src={process.env.PUBLIC_URL + '/images/gmailcolor.png' } alt='icon'/>
            </a>
        </div>

    </div>

    <div id='headshotdiv'>
        <img id='headshot' src={process.env.PUBLIC_URL + '/images/headshot.png'} alt="Headshot" />
    </div>
    </div>
    </div>

        </>

    )
}


export default Home