import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogsArr from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from './Filter'

class App extends Component {

  constructor(){
    super()
    this.state={
      hogs: hogsArr,
      showGreased: false, 
      sortBy: ''
    }
  }

  updateSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  toggleGreased = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
  }

  findHogs = () => {
    let updatedHogs = this.state.hogs

    if(this.state.showGreased){
      updatedHogs = this.state.hogs.filter(hog => hog.greased)
    }
    
    if (this.state.sortBy === 'weight') {
      updatedHogs = updatedHogs.sort(function (hogA, hogB) {
        return hogA.weight - hogB.weight
      })
    } else if (this.state.sortBy === 'name') {
      updatedHogs = updatedHogs.sort(function(hogA, hogB){
        var nameA = hogA.name.toUpperCase();
        var nameB = hogB.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
          return 0
      })
    }
    return updatedHogs
  }

  render() {

    const hogsToShow = this.findHogs()

    return (
      <div className="App">
        <Filter toggleGreased={this.toggleGreased} updatedSort={this.updateSort}/>
        <Nav />
        <HogContainer hogs={hogsToShow}/>
        
      </div>
    );
  }
}

export default App;
