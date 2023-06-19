import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo.png';
import LogoSb from '../../assets/images/logos.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope, faProjectDiagram} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faSkype} from '@fortawesome/free-brands-svg-icons'
const Sidebar=() =>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'></img>
            <img src={LogoSb} alt='Jyothish' className='sub-logo'></img>
        </Link>

        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'>
            </FontAwesomeIcon></NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link'to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='projects-link' to='/project'>
                <FontAwesomeIcon icon={faProjectDiagram} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jyothish-rs-88729a1b9/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.github.com/jyothish21/'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='skype:live:.cid.846e5dede35b3d8e'>
                    <FontAwesomeIcon icon={faSkype} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar