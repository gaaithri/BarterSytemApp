import React, { Component } from 'react'
import Democarousel from './Democarousel';
import {Row, Col,Container,Jumbotron,Button} from 'react-bootstrap';
export default class LandingPage extends Component {
  render() {
      return(
<div>
  
  <Jumbotron>
  
  <Container>
    
  <Row>
    <Col><img src= "images/1.jpg" alt="Intro" width="400px" height="300px" /></Col>
    <Col><img src= "images/donate2.jpg" alt="Intro" width="400px" height="300px"/></Col>
    <Col><img src= "images/logo.jpeg" alt="Intro" width="200px" height="250px" /></Col>
    <Col><img src= "images/logo.jpeg" alt="Intro" width="200px" height="250px" /></Col>
    <Col><img src= "images/2.jpg" alt="Intro" width="400px" height="300px" /></Col>
    <Col><img src= "images/4.jpg" alt="Intro" width="400px" height="300px"/></Col>
  </Row>
  
</Container>
  
  
</Jumbotron>

</div>
      );
  }
}

