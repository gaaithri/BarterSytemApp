import React, { Component } from 'react'
import Democarousel from './Democarousel';
import {Row, Col,Container,Jumbotron,Button,Carousel} from 'react-bootstrap';
export default class LandingPage extends Component {
  render() {
      return(
<div>
  
 
  
  <Container>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/job26-s56-por-0438.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1000&s=625ec8626e304a3f0cc3e0db32c67a41"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v262-ning-10-volunteer_2.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1000&s=102698506d40182a904e2f7696addbda"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/job26-s56-por-0036.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1000&s=494f7f178977ba95ce98b6080f27d1c0"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    <hr></hr>
    <br>
    </br>
    <br></br>
  <Row>
    <Col><img src= "images/1.jpg" alt="Intro" width="400px" height="300px" /></Col>
    <Col><img src= "images/donate2.jpg" alt="Intro" width="400px" height="300px"/></Col>
    <Col><img src= "images/logo.jpeg" alt="Intro" width="200px" height="250px" /></Col>
    </Row>
    <hr>
    </hr>
    <br>
    </br>
    <Row>
    <Col><img src= "images/logo.jpeg" alt="Intro" width="200px" height="250px" /></Col>
    <Col><img src= "images/2.jpg" alt="Intro" width="400px" height="300px" /></Col>
    <Col><img src= "images/4.jpg" alt="Intro" width="400px" height="300px"/></Col>
    </Row>
  
</Container>
  
  


</div>
      );
  }
}

