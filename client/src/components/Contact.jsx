import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import headshot from '../data/images/headshot.jpeg';

let Contact = () => {
  return(
    <div className="contact-wrapper">
      <div className="column">
      <h3 className="contact-title">CONTACT</h3>
        <img src={headshot} alt="Headshot of Audree" />
        <div className="contact-text">
          <h3>AUDREE STEINBERG</h3>
          <h5>Full Stack Engineer</h5>
        </div>

        <div className="row-icons">
          <a href={'http://github.com/audreee'}><FontAwesomeIcon icon={faGithub} size="4x" style={{color: '#FAD02C'}}/></a>
          <a href={'http://linkedin.com/in/audreesteinberg'}><FontAwesomeIcon icon={faLinkedinIn} size="4x" style={{color: '#282120'}}/></a>
          <a href={'mailto:audreecodes@gmail.com'}><FontAwesomeIcon icon={faEnvelope} size="4x" style={{color: '#90ADC6'}}/></a>
        </div>
      </div>

    </div>
  )
}

export default Contact;