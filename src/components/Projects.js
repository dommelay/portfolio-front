import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Projects = () => {
    const [wdetails, setWdetails] = useState(false)
    const [gdetails, setGdetails] = useState(false)

    const handleGdetails = () => {
        setGdetails(!gdetails)
    }
    const handleWdetails = () => {
        setWdetails(!wdetails)
    }

    return (
        <div className='projectscontainer'>

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

             <div>
                <h1 className='pagetitle'>Projects</h1>
            </div>
            <div className='allprojects'>

                <div className='projectdiv'>
                    <h2 className='projecttitle'>Gallery</h2>
                    <div className='projectlinks'>
                        <h3 className='repo front'>
                            <a href='https://github.com/dommelay/GalleryFront2' target='_blank'>Frontend</a>
                        </h3>
                        <a href='https://domsgallery.netlify.app/' target='_blank'>
                            <img className='linkicon' src='/images/link.png' alt='link to project'/>
                        </a>
                        <h3 className='repo back'>
                            <a href='https://github.com/dommelay/GalleryBack2' target='_blank'>Backend</a>
                        </h3>
                        </div>
                        <img className='projectimg' src='/images/gallery.jpg' alt='gallery project'/>
                        <div className='projectinfo'>
                        <h3 className='details' onClick={handleGdetails}>...</h3>
                    </div>
                    {gdetails ?
                    <div className='detailsdiv'>
                        <h3 className='seemore'>Gallery is a museum application that allows users to search through the Art Institute of Chicago's database and collect their favorite artworks. Includes random search artwork generator. Technologies used: TypeScript, MERN (MongoDB, Express, React + Router, Node), RESTful API, third party API. App is capable of CRD functionality. Please see Frontend README.md for a detailed description of the process of building the project and how it functions.</h3>
                    </div>
                    : <></>}
                </div>

                <div className='projectdiv weatherdiv'>
                    <h2 className='projecttitle'>Weather App</h2>
                    <div className='projectlinks'>
                        <h3 className='repo front'>
                            <a href='https://github.com/dommelay/WeatherApp-frontend' target='_blank'>Frontend</a>
                        </h3>
                        <a href='https://domsweatherapp.netlify.app/' target='_blank'>
                            <img className='linkicon' src='/images/link.png' alt='link to project'/>
                         </a>
                         <h3 className='repo back'>
                            <a href='https://github.com/dommelay/WeatherApp-backend' target='_blank'>Backend</a>
                        </h3>
                    </div>
                    <img className='projectimg' src='/images/weather.jpg' alt='weather app project'/>
                    <div className='projectinfo'>
                        <h3 className='details' onClick={handleWdetails}>...</h3>
                    </div>
                    {wdetails ?
                    <div className='detailsdiv'>
                        <h3 className='seemore'>A weather application which allows users to obtain weather information from cities around the world through search by zip code and country. The application utilizes an OpenWeather API. The technologies used include MERN (MongoDB, Express, React + Router, Node), RESTful API, HTML, and CSS. The app is capable of full CRUD functionality. Please see Frontend README.md for a detailed description of the process of building the project and how it functions.</h3>
                    </div>
                    : <></>}
                </div>

            </div>

        </div>

    )
}

export default Projects