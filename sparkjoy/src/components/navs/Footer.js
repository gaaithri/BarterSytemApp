import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
              <br></br>
               <Container fluid>
               <footer class="api-footer">
                <div>
                  SparkUI
                    <span>&copy; 2019 creativeLabs.</span>
                      </div>
                        <div className="ml-auto">
                          <span>Powered by</span>
                          <h5>MASAI</h5>
                         </div>
                        </footer>
             </Container>   
         </div>
        )
    }
}


