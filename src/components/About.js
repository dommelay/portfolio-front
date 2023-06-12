import react from 'react'
import {Link} from 'react-router-dom'



const About = () => {


    return (
        <>

        <div className='navcontainer'>
            <Link to={'/'}>
                <h4 className='navelement navab'>Home</h4>
            </Link>
            <Link to={'/resume-education'}>
                <h4 className='navelement navab'>Resume</h4>
            </Link>
            <Link to={'/projects'}>
                <h4 className='navelement navab'>Projects</h4>
            </Link>
            <Link to={'/about'}>
                <h4 className='navelement navab'>About</h4>
            </Link>
        </div>

<div className='aboutcontainer'>
        
        <div className='abouttitle2'>
        <h1 id='abouttitle2'>About</h1>
        <a href='https://open.spotify.com/user/31sxqaklepkjjyscj3dl2lvs3buy' target='_blank'>
                <img className='spoticon' src='/images/spotify.png' alt='Spotify'/>
            </a>

            <a href='https://www.instagram.com/dommelay/' target='_blank'>
                <img className='igicon' src='/images/instagram.png'/>
            </a>
            <img className='leo' src='/images/leo.png' alt='Leo sign'/>
        </div>

        <div id='aboutpic'>
            <img className='aboutpic' src='/images/fashionshot.jpg' alt='Dominique'/>
        </div>

    <div id='about'>
        <div className='abouttitle'>
            <h1 id='abouttitle'>About</h1>
        </div>

        <div className='igmusic'>

            {/* href - target url
            target - '_blank'
            className - for styling
            src - image pathway
            alt - alternative text */}

            <a href='https://open.spotify.com/user/31sxqaklepkjjyscj3dl2lvs3buy' target='_blank'>
                <img className='spoticon' src='/images/spotify.png' alt='Spotify'/>
            </a>

            <a href='https://www.instagram.com/dommelay/' target='_blank'>
                <img className='igicon' src='/images/instagram.png'/>
            </a>
            <img className='leo' src='/images/leo.png' alt='Leo sign'/>
        </div>

        <div className='about'>
            <h2 className='bioab'>Beyond coding, I have a unique blend of passions and experiences. I am into fashion and I spent 2022 modeling in New York City. I do enjoy photoshoots and ocassionally runway, however I very much prefer to create my own content. Shoes are definitely the most important part of an outfit, and you will almost always catch me in sneakers.</h2><br/>
            <h2 className='bioab'>I am also an outspoken mental health advocate. I work to destigmatize mental health issues, especially those such as Bipolar Disorder and Schizophrenia. In support of my efforts, I have no shame sharing my own personal struggles. My university coursework and lived experienced make me expeceptionally knowledgeable in this field. I hope to push our society to deconstruct heavily biased Western psychiatry as it exists today.</h2><br/>
            <h2 className='bioab'>Music is another one of my interests. My favorite artists are Frank Ocean, Travis Scott, Cheif Keef, Grizzly Bear, and Playboi Carti. If I were president, my first order of duty would be to pardon Young Thug. In the wise words of Gucci, 'watch the things you say the feds be listening to the music, and they gon' take your lyrics and build a case and try to use it.' </h2>

        </div>
        </div>

    </div>
        </>


    )
}

export default About

console.log('hello world')