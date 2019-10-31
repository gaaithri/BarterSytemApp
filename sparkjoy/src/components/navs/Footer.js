import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div class="container">
        <footer className="page-footer font-small pt-4" style={{ background: "#504E5A",height:"100px",padding:"5px" }}>
          <div className="container-fluid text-center text-white text-md-left">
            <div className="row">
              <div className="col-md-12">

                <hr style={{ background: "whitesmoke", marginLeft: "120px" }}></hr>
                <div className="footer-copyright text-center py-3 text-white">© 2019 Copyright:  YouSparkYou

                </div>
                </div>
                 
            </div>
          </div>
                <div className="row">
                  <div className="col-md-12">

                  </div>
                </div>

               
            
        </footer>

      </div>
    


    )
  }
}














