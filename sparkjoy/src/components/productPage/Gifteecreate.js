import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProduct} from '../../store/actions/productAction'

class Gifteecreate extends Component {
  state = {
    name: '',
    type: '',
    rname: '',
    msg:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
      // document.getElementById("uploadFile").value = this.value.substring(12);
    })
  }

//   fileChangedHandler=(e) =>{
//     // var val = "images/"${}
//     this.setState({
      
//       [e.target.id]:"images/"+e.target.value.substring(12)})
//   }
// uploadHandler = ()=> {console.log(this.state.image)
// }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProduct(this.state)
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Request</h5>
          <div className="input-field">
            <input type="text" id='name' onChange={this.handleChange} />
            <label htmlFor="name">Product Name</label>
          </div>
          <div className="input-field">
            <textarea type="type" id='type' className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="type">Product Type</label>
          </div>
          <div className="input-field">
            <input type="text" id='rname' onChange={this.handleChange} />
            <label htmlFor="name">Receiver Name</label>
          </div>
          <div className="input-field">
            <input type="text" id='msg' onChange={this.handleChange} />
            <label htmlFor="name">Message</label>
          </div>
         
          <div className="input-field">
            <button className="btn pink lighten-1">Request</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    createProduct: (product)=>dispatch(createProduct(product))
}
}
export default connect(null,mapDispatchToProps)(Gifteecreate)