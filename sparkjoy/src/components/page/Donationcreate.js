import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createItem} from '../../store/actions/itemActions'
import {Link} from 'react-router-dom'
import {Form,Row,Col, Card, } from 'react-bootstrap'
import './Donor.css'
class Donationcreate extends Component {
  state = {
    name: '',
    type: '',
    image:null,
    dname: '',
    createdAt:''
  
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
      
      <div className="container" >
    <div className="box">

           <Card.Body style={{marginLeft:"300px",height:"500px"}}>
      <Form onSubmit={this.handleSubmit} >
        <h5 style={{  marginLeft: "120px", marginTop: "5px" }}>Create a New Donation</h5>

    
        <Form.Label column sm="2">
                Items Name
      </Form.Label>
      <input type="text" id='name' onChange={this.handleChange} style={{backgroundColor:"rgba(0,0,0,0)"}}/>
              <Col sm="10">
  
              </Col>
       
     
  
              <Form.Label column sm="2">
                Items Type
            </Form.Label>
            <input type="type" id='type' className="materialize-textarea" onChange={this.handleChange} style={{backgroundColor:"rgba(0,0,0,0)"}}></input>
              <Col sm="10">
  
              </Col>
          
            
              <Form.Label column sm="2">  Donor Name:  </Form.Label>
              <input type="type" id='dname' className="materialize-textarea" onChange={this.handleChange} style={{backgroundColor:"rgba(0,0,0,0)"}}></input>
              <div>
              <Form.Label column sm="2">  Images  </Form.Label>
             
                  <input type="file"  id='image' name="image" accept="image/*" onChange={this.fileChangedHandler}></input>
                  </div>
            <div>
         
          <button onClick={this.uploadHandler}>Upload</button> 
                 
<Link to="/thankDonor" >  <button className="btn pink lighten-1" style={{marginLeft:"300px",color:"blue"}}>Create</button> </Link>
          </div>
      </Form>
      </Card.Body>
    
    </div>
    </div>

     )
   } }
const mapDispatchToProps = (dispatch) =>{
  return {
    createItem: (item)=>dispatch(createItem(item))
}
}
export default connect(null,mapDispatchToProps)(Donationcreate)
