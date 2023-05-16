import react from 'react'

const Resume = () => {




    return (


        <div id='resumecontainer'>

            <div id='resumedownload'>
                <a href='https://drive.google.com/file/d/1YmI9GWPQFnfqK_zgzeeki3P09NPfhw2w/view?usp=sharing' target='_blank' download>
                    <button id='resumebtn'>Download Resume</button>
                </a>
            </div>

            <div id='educontainer'>
                <div>
                    <div className='schoollogo'>
                        <h1 className='school'>University of Michigan</h1>
                        <img className='edulogo' src='/images/umich.png' alt='university of michigan logo'/>
                    </div>
                    <div>
                        <h3 className='edulocation'>Ann Arbor, MI</h3>
                    </div>
                </div>
                <div>
                    <img className='galogo' src='/images/ga.png' alt='general assembly logo'/>
                </div>
            </div>

        </div>
    )
}

export default Resume