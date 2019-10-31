import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../../store/actions/productAction'
import { Form, Col, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Gift.css'
class Gifteecreate extends Component {
  state = {
    name: '',
    type: '',
    rname: '',
    msg: ''
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
      <div className="container" >
        <div className="card">
          <Card.Body style={{ marginLeft: "300px" }}>
            <Form onSubmit={this.handleSubmit}>
              <h5 style={{ marginLeft: "110px", marginTop: "10px", textDecorationStyle: "white" }}>Request for a New Gift</h5>
              <Form.Label column sm="2">
                Product Name
              </Form.Label>
              <input type="text" id='name' onChange={this.handleChange} style={{ backgroundColor: "rgba(0,0,0,0)" }} />
              <Col sm="10">

              </Col>
              <Form.Label column sm="2">
                Product Type
             </Form.Label>
              <input type="text" id='type' onChange={this.handleChange} style={{ backgroundColor: "rgba(0,0,0,0)" }}></input>
              <Col sm="10">

              </Col>


              <Form.Label column sm="2">  Receiver Name  </Form.Label>


              <input type="text" id='rname' onChange={this.handleChange} style={{ backgroundColor: "rgba(0,0,0,0)" }} />
              <Col sm="10">

              </Col>

              <Form.Label column sm="2"> Message  </Form.Label>


              <input type="text" id='msg' onChange={this.handleChange} style={{ backgroundColor: "rgba(0,0,0,0)" }} />
              <Col sm="10">

              </Col>




            <div className="input-field">
              <button className="btn pink lighten-1" style={{ marginLeft: "200px", color: "blue" }}>Request</button>
            </div>

            </Form>
          </Card.Body>
        </div>
      </div>

    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => dispatch(createProduct(product))
  }
}
export default connect(null, mapDispatchToProps)(Gifteecreate)