import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
    faDiagramProject,
  } from '@fortawesome/free-solid-svg-icons';
  import LogoS from '../../assets/images/logo-s.png'
  import LogoSubtitle from '../../assets/images/logo_sub.png'
import { useState } from 'react';
export const Sidebar: React.FC = () => {
    const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
      <Link className="logo" to="/" >
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
       
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
 
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink

          className="portfolio-link"
          to="/projects"
          onClick={() => setShowNav(false)}
        >
         
          <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
        </NavLink>
        <NavLink
        
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
          <li>
              <a rel='noreferral' href="https://www.linkedin.com/in/sreerag-haridas-em-a5989516a">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d4" />
              </a>
          </li>
          <li>
              <a rel='noreferral' href="https://github.com/sreeragdas">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4d4" />
              </a>
          </li>
     
   

      </ul>
    </div>
  )
}
