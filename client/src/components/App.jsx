import React from 'react';
import Navbar from './Navbar.jsx';
import Welcome from './Welcome.jsx';
import About from './About.jsx';
import Tech from './Tech.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      aboutIsVisible: false,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
    this.updateScrollPos = this.updateScrollPos.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateScrollPos() {
    if (window.scrollY >= window.innerHeight) {
      this.setState({aboutIsVisible: true})
      window.removeEventListener('scroll', this.updateScrollPos);
    }
  }

  updateDimensions() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  componentDidMount(){
    // this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener('scroll', this.updateScrollPos);
  }

  componentWillUnmount(){
     window.removeEventListener('scroll', this.updateScrollPos);
     window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return(
      <div className="app-container">
        <Navbar windowWidth={this.state.windowWidth} />
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
        <div className="section-container" id="contact">
          <Contact />
        </div>
      </div>
    )
  }
}

export default App;