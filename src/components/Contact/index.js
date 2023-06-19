import Loader from 'react-loaders';
import './index.scss';
import { useState, useEffect, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';

const Contact=() =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timeout)
      }, [])


    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('gmail', 'template_aypoahp', form.current, 'service_tfpwxed')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={"Contact Me".split("")}
                        idx={15}
                        />
                    </h1>
                
                    <p>
                    I'm a very ambitious front-end developer, data Analyst who also works on AI, ML and DL models looking for a role in an
                    established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
                    </p>


                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <table>
                                <tr><td className='half'>
                                    <input type='text' placeholder='Name' name='from_name'required/>
                                </td></tr>
                                <tr><td className='half'>
                                    <input type='email' placeholder='Email' name='email' required/>
                                </td></tr>
                                <tr><td>
                                    <input type='text' placeholder='Subject' name='subject' required/>
                                </td></tr>
                                <tr><td >
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </td></tr>
                                <tr><td>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </td></tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact