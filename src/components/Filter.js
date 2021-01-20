import React from "react";


class Filter extends React.Component {


  render() {
      const styles = {
          border: '2px solid black', 
          width: '80%',
          margin: 'auto',
          padding: '5%'
      }
    return (
      <div style={styles}>
       <input type="checkbox" onChange={this.props.toggleGreased}/> show Greased only
       <select onChange={this.props.updatedSort}>
        <option value=''></option>
        <option value='weight'>weight</option>
        <option value='name'>name</option>
       </select>
      </div>
    );
  }
}

export default Filter;
