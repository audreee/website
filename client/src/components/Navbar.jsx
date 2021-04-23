import React from 'react';

let Navbar = () => {
    return (
        <div>
          <ul id="nav">
            <div className="nav-left">
              <li><a href="#">Audree Steinberg</a></li>
            </div>
            <div className="nav-right">
              <li><a href="#about">About</a></li>
              <li><a href="#tech">Tech</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </div>
          </ul>
        </div>
    );
}

export default Navbar;