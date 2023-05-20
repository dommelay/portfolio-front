import React from 'react'

const Projects = () => {

//up arrow


    return (
        <div className='projectscontainer'>

             <div>
                <h1 className='pagetitle'>Projects</h1>
            </div>
            <div className='allprojects'>
                <div className='projectdiv'>
                    <h2 className='projecttitle'>Gallery</h2>
                    <button className='projectlink'>
                        <a href='https://domsgallery.netlify.app/' target='_blank'>Link</a>
                    </button>
                    <img className='projectimg' src='/images/gallery.jpg' alt='gallery project'/>
                </div>
                <div className='projectdiv weatherdiv'>
                    <h2 className='projecttitle'>Weather App</h2>
                    <button className='projectlink'>
                        <a href='https://domsweatherapp.netlify.app/' target='_blank'>Link</a>
                    </button>
                    <img className='projectimg' src='/images/weather.jpg' alt='weather app project'/>
                </div>
            </div>

        </div>

    )
}

export default Projects