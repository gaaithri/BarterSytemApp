import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createItem} from '../../store/actions/itemActions'

class Donationcreate extends Component {
  state = {
    name: '',
    type: '',
    image:null,
    dname: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
      // document.getElementById("uploadFile").value = this.value.substring(12);
    })
  }

  fileChangedHandler=(e) =>{
    // var val = "images/"${}
    this.setState({
      
      [e.target.id]:"images/"+e.target.value.substring(12)})
  }
uploadHandler = ()=> {console.log(this.state.image)
}

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createItem(this.state)
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
            <textarea type="type" id='type' className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="type">Item Type</label>
          </div>
          <div className="input-field">
            <input type="text" id='dname' onChange={this.handleChange} />
            <label htmlFor="name">D Name</label>
          </div>
          <div className="input-field">

            <input type="file"  id='image' name="image" accept="image/*" onChange={this.fileChangedHandler}></input>
            {/* document.getElementById("uploadFile").value = this.value.substring(12);value = fileInput.value.replace("C:\\fakepath\\", ""); onChange={this.handleChange} /> */}
            <label htmlFor="type">Item Image</label>
           {/* Upload : to store image in the db  */}
           <button onClick={this.uploadHandler}>Upload</button>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    createItem: (item)=>dispatch(createItem(item))
}
}
export default connect(null,mapDispatchToProps)(Donationcreate)