import React, {Component} from 'react';
import logo from "../images/logo.jpeg"
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Signed from './Signed'
import Visitor from './Visitor'
import  './navbar.css'


export default class Navbar extends Component{
 state={
   isOpen:false
 } 
 handleToggle = () => {
   this.setState({isOpen:!this.state.isOpen})
 }
 render() {
    return (
        <div className = "navbar">   
          <div className="nav-center">
          <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="SparkJoy" width="200px" height="100px"/> 
            </Link>
            <button type="button" className="nav-btn"
            onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
            </div>
            <ul className={this.state.isOpen?"nav=nav-links show-nav":"nav-links"}>
              
                <Link to="/">Home</Link>
                          
                <Link to="/contact"> Contact</Link>
                <Signed /> 
                <Visitor /> 
            
             
           
                                       
              </ul>
         </div>
       </div>
      )
    }      
}
