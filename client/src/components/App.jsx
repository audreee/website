import React from 'react';
import Navbar from './Navbar.jsx';
import Welcome from './Welcome.jsx';
import About from './About.jsx';
import Tech from './Tech.jsx';
import Projects from './Projects.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      aboutIsVisible: false
    }
    this.updateScrollPos = this.updateScrollPos.bind(this);
  }

  updateScrollPos() {
    if (window.scrollY >= 790) {
      this.setState({aboutIsVisible: true})
      window.removeEventListener('scroll', this.updateScrollPos);
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.updateScrollPos);
  }

  componentWillUnmount(){
     window.removeEventListener('scroll', this.updateScrollPos);
  }

  render() {
    return(
      <div className="app-container">
        <Navbar />
        <div className="section-container" id="welcome">
          <Welcome />
        </div>
        <div className="section-container" id="about">
          <About aboutIsVisible={this.state.aboutIsVisible}/>
        </div>
        <div className="section-container" id="tech">
          <Tech />
        </div>
        <div className="section-container" id="projects">
          <Projects />
        </div>
      </div>
    )
  }
}

export default App;