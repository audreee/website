import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isMobile: false,
      collapse: false
    }
    this.toggleCollapse = this.toggleCollapse.bind(this);
    // this.toggleMobile = this.toggleMobile.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  toggleCollapse() {
    this.setState({ collapse: !this.state.collapse})
  }

  handleLinkClick(e) {
    if (this.props.isMobile) {
      this.setState({collapse: true})
    }
  }

  // toggleMobile() {
  //   if (this.props.windowWidth < 769) {
  //     this.setState({ isMobile: true, collapse: true })
  //   } else {
  //     this.setState({ isMobile: false, collapse: false})
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.isMobile !== this.props.isMobile) {
      this.handleLinkClick();
    }
  }

  componentDidMount() {
    // this.toggleMobile();
    if (this.props.isMobile) {
      this.setState({collapse: true})
    }
  }

  renderLinks() {
    return(
      <div className="links">
        <li><a href="#about" onClick={this.handleLinkClick}>About</a></li>
        <li><a href="#tech" onClick={this.handleLinkClick}>Tech</a></li>
        <li><a href="#projects" onClick={this.handleLinkClick}>Projects</a></li>
        <li><a href="#contact" onClick={this.handleLinkClick}>Contact</a></li>
      </div>
    )
  }

  render() {
    return (
      <div>
        <ul id="nav">
          <div className="nav-left">
            <li><a href="#" onClick={this.handleLinkClick}>Audree Steinberg</a></li>
            {this.props.isMobile && !this.state.collapse && this.renderLinks()}
          </div>
          <div className="nav-right">
            {this.props.isMobile ?
              <div className="burger">
                <FontAwesomeIcon icon={faBars} size="2x" onClick={this.toggleCollapse} style={{color: '#F8EFE4'}}/>
              </div>
              :
              this.renderLinks()
            }
          </div>
        </ul>
      </div>
    );
  }

}


export default Navbar;