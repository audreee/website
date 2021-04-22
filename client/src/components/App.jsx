import React from 'react';
import Navbar from './Navbar.jsx';
import Welcome from './Welcome.jsx';
import About from './About.jsx';

class App extends React.Component {
  render() {
    return(
      <div className="app-container">
        <Navbar />
      <div className="section-container">
        <Welcome />
      </div>
      <div className="section-container">
        <About />
      </div>
      </div>
    )
  }
}

export default App;