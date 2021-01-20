import React, { Component } from "react";

class HogCard extends Component {

  constructor(){
    super()

    this.state = {
      showDetails: false,
      toggled: false
    }
  }

  renderDetails = () => {
    const { specialty, weight, ['highest medal achieved']: medal } = this.props.hog
    return (
      <div>
    <h3> specialty: {specialty} </h3>
    <h3> weight: {weight}</h3>
    <h3>medal: {medal}</h3>
    </div>
    )
  }

  handleClick = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }
 
  toggleHog = () => {
    this.setState({
      toggleHog: !this.state.toggled
    })
  }

  render() {
      
      const { name, specialty, greased, weight } = this.props.hog
      const imageName = name.toLowerCase().split(' ').join('_')
      let pigImage = require(`../hog-imgs/${imageName}.jpg`)

    return (
      <div className="ui eight wide column">
        <h1>{ name }</h1>
        <button onClick={this.toggleHog}>toggle Hog Image</button>
        {this.state.toggled ? null : <img src={pigImage} onClick={this.handleClick}/>}
        
        {this.state.showDetails ? this.renderDetails() : null }

       
      </div>
    );
  }
}

export default HogCard;
