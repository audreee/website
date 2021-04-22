import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove() {
    this.setState({ isFlipped: !this.state.isFlipped })
  }

  render() {
    return (
     <div className="card">
      <div className="card-img" style={{backgroundImage: `url("${this.props.img}")`}}>
      </div>
      <div className="card-content">
        <h5 className="card-title">{this.props.title}</h5>
        <p className="card-description">{this.props.description}</p>
        <button className="card-button"><a href={this.props.link}>See More</a></button>
      </div>
     </div>
    )
  }
}

export default Card;