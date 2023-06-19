import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react';

import Logos from '../../assets/images/bg.jpg'
import i1 from '../../assets/images/pj/rco.jpg'
import i2 from '../../assets/images/pj/rcal.jpg'
import i3 from '../../assets/images/pj/rcol.jpg'
import i4 from '../../assets/images/pj/rjson.jpg'
import i5 from '../../assets/images/pj/rage.jpg'
import i6 from '../../assets/images/pj/bsf.jpg'
import i7 from '../../assets/images/pj/bpt.jpg'

const Project =() =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timeout)
      }, [])
    return(
        <>
        <div class="container project-page">
            <div className='text-zone'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                        strArray={"Projects by Me".split("")}
                        idx={15}
                />
                
            </h1>
            <div className='prj'>
                <Link to='https://jyothish21.github.io/react-counter/' className='flat-button'><img src={i1} alt='Project 1'/></Link>
            </div>
            <div className='prj'>
                
                <Link to='https://jyothish21.github.io/react-calculator/' className='flat-button'><img src={i2} alt='Project 2'/></Link>
            </div>
            <div className='prj'>
                
                <Link to='https://jyothish21.github.io/react-color/' className='flat-button'><img src={i3} alt='Project 3'/></Link>
            </div>
            <div className='prj'>
                
                <Link to='https://jyothish21.github.io/react-json/' className='flat-button'><img src={i4} alt='Project 4'/></Link>
            </div>
            <div className='prj'> 
                
                <Link to='https://jyothish21.github.io/react-age/' className='flat-button'><img src={i5} alt='Project 5'/></Link>
            </div>
            <div className='prj'> 
                <Link to='' className='flat-button'><img src={i6} alt='Project 6'/></Link>
            </div>
            <div className='prj'> 
                <Link to='' className='flat-button'><img src={i7} alt='Project 6'/></Link>
            </div>

            </div>
        </div>    
        </>
    )
}

export default Project