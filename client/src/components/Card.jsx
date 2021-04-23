import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove() {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    return (
     <div className="card" onMouseEnter={this.handleMouseMove} onMouseLeave={this.handleMouseMove}>
      <div className="card-img" style={{backgroundImage: `url("${this.props.img}")`}}>
      </div>
      <div className="card-content">
        <h5 className="card-title">{this.props.title}</h5>
        <p className="card-description">{this.props.description}</p>
        <div className="row">
          <a href={this.props.repo}><FontAwesomeIcon icon={faGithub} size="2x" style={{color: '#90ADC6'}}/></a>
          {this.props.video && <a href={this.props.video}><FontAwesomeIcon icon={faYoutube} size="2x" style={{color: '#FAD02C'}}/></a>}
        </div>
      </div>
     </div>
    )
  }
}

export default Card;