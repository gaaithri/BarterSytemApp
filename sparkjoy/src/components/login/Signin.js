import React, { Component } from 'react'

class Signin extends Component {
  state = {
    username: '',
    password: ''
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
      <div className="container" style={{height:"400px"}}>
        <form className="white" onSubmit={this.handleSubmit} style={{marginLeft:"300px",marginTop:"80px",backgroundColor:"rgba(0,0,0,0)"}}>
          <h5 className="grey-text text-darken-3" style={{marginLeft:"20px"}}>Sign In</h5>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="username" id='username' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signin 

