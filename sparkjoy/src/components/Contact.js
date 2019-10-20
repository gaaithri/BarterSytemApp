import React, { Component } from 'react'
import { Form ,Button,Card,CardDeck} from 'react-bootstrap'
import '../components/Contact.css'
export default class Contact extends Component {
    render() {
        return(
<div className="container backgroundcolor">
          
        
 
          <Card.Body>
            
              <Form className=" contact w-50 ">
                  <Form.Group controlId="formBasicEmail">
                  <h5 className="colortext">Spark of Joy</h5>
                      <Form.Label></Form.Label>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                      <Form.Label className="colortext">Email:sparkforu@gmail.com</Form.Label>

                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label className="colortext">Address: BHIVE Forum, GNS Towers, #18, 1st, 2nd & 3rd Floor Dairy Circle Road, Adugodi, Koramangala, Next to Forum Mall, Bengaluru, Karnataka 560029</Form.Label>
                  </Form.Group>
              </Form>
          </Card.Body>

          <hr></hr>
              <CardDeck>
                  <Card>
                      <Card.Img variant="top" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                      <Card.Body>
                          <Card.Title>Our Mission</Card.Title>
                          <Card.Text>
                              Support spark of joy in Mission to Million Meals to provide food to schoolkids across all states in India. Join the fight against hunger and malnutrition.
                          </Card.Text>
                      </Card.Body>

                  </Card>
                  <Card>
                      <Card.Img variant="top" src="https://staticsb.we.org/f/52095/552x360/dea69d16ea/toilets-clean-water-india-2.jpg" />
                      <Card.Body>
                          <Card.Title>Our Mission</Card.Title>
                          <Card.Text>
                              Honor or remember someone special by making a gift in their name.
                         </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card>
                      <Card.Img variant="top" src="http://d.wildapricot.net/images/default-album/how-to-get-donations.jpg" />
                      <Card.Body>
                          <Card.Title>Our Mission</Card.Title>
                          <Card.Text>
                              You have not lived today until you have done something for someone who can never repay you.
                         </Card.Text>
                      </Card.Body>


                  </Card>
              </CardDeck>
          </div>

        );
    }
}