import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-inner">
          {!this.state.isFlipped && <div className="card-front">
            <img src={this.props.img} alt="Screenshot" className="card-img" />
          </div>}
          {this.state.isFlipped && <div className="card-back">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            <button><a href={this.props.link}>See More</a></button>
          </div>}
        </div>
      </div>
    )
  }
}

export default Card;