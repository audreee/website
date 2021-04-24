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
      windowHeight: window.innerHeight,
      isMobile: true
    }
    this.updateScrollPos = this.updateScrollPos.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.toggleMobile = this.toggleMobile.bind(this);
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
    }, this.toggleMobile());
  }

  toggleMobile() {
    if (this.state.windowWidth < 769) {
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }
  }

  componentDidMount(){
    this.toggleMobile();
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
        <Navbar isMobile={this.state.isMobile} windowWidth={this.state.windowWidth} />
        <div className="section-container" id="welcome">
          <Welcome isMobile={this.state.isMobile}/>
        </div>
        <div className="section-container" id="about">
          <About isMobile={this.state.isMobile} aboutIsVisible={this.state.aboutIsVisible}/>
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