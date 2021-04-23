import React from 'react';

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
        {this.state.hover && <button className="card-button"><a href={this.props.link}>See More</a></button>}
      </div>
     </div>
    )
  }
}

export default Card;