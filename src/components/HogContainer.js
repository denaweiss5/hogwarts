import React from "react";
import hogs from "../porkers_data";
import HogCard from "./HogCard";

class HogContainer extends React.Component {

  renderHogs = () => {
    return this.props.hogs.map(hogObj => {
      return <HogCard key={hogObj.id} hog={hogObj}/>
    })
  }


  render() {
    return (
      <div className="ui grid container">
       {this.renderHogs()}
      </div>
    );
  }
}

export default HogContainer;
