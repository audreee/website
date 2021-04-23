import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import headshot from '../data/images/headshot.jpeg';

let Contact = () => {
  return(
    <div className="contact-wrapper">
      <h3>CONTACT</h3>
      <img src={headshot} alt="Headshot of Audree" />
      <h3>AUDREE STEINBERG</h3>
      <h5>Full Stack Engineer</h5>
      <div className="row icons">
        <a href={'http://github.com/audreee'}><FontAwesomeIcon icon={faGithub} size="4x" style={{color: '#FAD02C'}}/></a>
        <a href={'http://linkedin.com/in/audreesteinberg'}><FontAwesomeIcon icon={faLinkedinIn} size="4x" style={{color: '#282120'}}/></a>
        <a href={''}><FontAwesomeIcon icon={faEnvelope} size="4x" style={{color: '#F8EFE4'}}/></a>
      </div>
    </div>
  )
}

export default Contact;