import React from 'react'
import {Link} from 'react-router-dom'


const Resume = () => {


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

<div id='resumepage'>

    <div className='pagetitlediv'>
        <h1 className='pagetitle edpage'>Education | Resume</h1>
    </div>

        <div id='resumecontainer'>

            <div id='resumedownload'>
                <a href='https://drive.google.com/file/d/1zD9dEpA4uJ6L6GRrZKcfuTW14vixFo3O/view?usp=sharing' target='_blank' download>
                    <div id='downloaddiv'>
                        <h2 id='download'>Resume</h2>
                        <img id='downloadimg' src='/images/download.png' alt='download resume'/>
                    </div>
                </a>
            </div>

            <div id='educontainer'>
                
                <div className='edu'>
                    <div className='schoollogo'>
                        <img className='edulogo' src='/images/umich.png' alt='university of michigan logo'/>
                        <div>
                            <h1 className='school'>University of Michigan</h1>
                            <h3 className='edulocation'>Ann Arbor, MI</h3>
                        </div>
                        <h3 className='eduyear'>2021</h3>
                    </div>
                    <div className='degreegpa'>
                        <a href='https://drive.google.com/file/d/1-KLawve68N53jzAvaRmLFw8KwuB8pqjU/view?usp=share_link' target='_blank'>
                            <h3 className='degree'>B.S. in Biopsychology and Neuroscience | Pre-medical concentration</h3>
                        </a>
                        <h3 className='gpa'>GPA: 3.71 | Relevant courses: 1 year Physics, 1 year Calculus, 1 year Statistics</h3>
                    </div>
                </div>

                <div className='edu'>
                    <div className='schoollogo'>
                        <img className='galogo' src='/images/ga.png' alt='general assembly logo'/>
                            <div>
                                <h1 className='school'>General Assembly</h1>
                                <h3 className='edulocation'>Remote</h3>
                            </div>
                        <h3 className='eduyear'>2023</h3>
                    </div>
                        <div className='degreegpa'>
                            <a href='https://drive.google.com/file/d/1f42aiylhn3rG0x7Ol42jpHChhpzZViVl/view?usp=sharing' target='_blank'>
                                <h3 className='degree'>Certificate | Computer Software Engineering</h3>
                            </a>
                            <h3 className='gpa gabio'>Full-stack software engineering immersive student in an intensive, twelve-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developed a portfolio of individual and group projects.</h3>
                        </div>
                </div>
            </div>
         

        </div>
        
</div>

</>
    )
}

export default Resume

