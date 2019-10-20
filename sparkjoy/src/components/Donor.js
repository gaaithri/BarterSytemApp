import React from 'react';
import './Donor.css'
import { Form, Button, Row, Col ,Card} from 'react-bootstrap'
const Donor = () => {
  return (
    <div>
      <Card >
  
      <Form className="width">
        <h5 style={{ textAlign: "center", marginLeft: "200px", marginTop: "20px" }}>Add Items to be Donated</h5>
        <div style={{ "marginTop": "20px", "marginLeft": "200px" }}>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Items Name:
    </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Items Type:
    </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Quantity:
    </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Image:
    </Form.Label>
            <Col sm="10">
              <input type="file" class="form-control-file" id="exampleFormControlFile1" />
            </Col>
          </Form.Group>

          <button type="button" class="btn btn-success btn-lg">Donate</button>
        </div>
       
      </Form>
   
      </Card>
    </div>
  
  )
}

export default Donor;