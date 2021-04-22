import React from 'react';

let Navbar = () => {
    return (
        <div>
          <ul id="nav">
            <div className="nav-left">
              <li><a href="#">Audree Steinberg</a></li>
            </div>
            <div className="nav-right">
              <li><a href="#">About</a></li>
              <li><a href="#">Tech</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </div>
          </ul>
        </div>
    );
}

export default Navbar;