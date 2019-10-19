import React, { Component } from 'react'

class Donationcreate extends Component {
  state = {
    name: '',
    type: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Donation</h5>
          <div className="input-field">
            <input type="text" id='name' onChange={this.handleChange} />
            <label htmlFor="name">Item Name</label>
          </div>
          <div className="input-field">
            <textarea id="type" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="type">Item Type</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Donationcreate