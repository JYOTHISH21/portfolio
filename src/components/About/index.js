import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react';

const About =() =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timeout)
      }, [])
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p><h3>Who am I?</h3></p>
        
                <p>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                    I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    I'm also a Data Analyst who also works on AI, ML and DL models 
                </p>
                <p>
                    <h3>Education</h3> 
                    <table>
                        <tr>
                            <td>
                                ICSE
                            </td>
                            <td>
                                97.6%
                            </td>
                            <td>
                                SHIS Marthandam
                            </td>
                        </tr>
                        <tr>
                            <td>
                                ISC
                            </td>
                            <td>
                                97.5%
                            </td>
                            <td>
                                SHIS Marthandam
                            </td>
                        </tr>
                        <tr>
                            <td>
                                B.Tech CSE
                            </td>
                            <td>
                                7.67
                            </td>
                            <td>
                                VIT Chennai
                            </td>
                        </tr>

                    </table>
                </p>

            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About