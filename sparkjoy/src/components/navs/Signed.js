import React from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from 'reactstrap/lib/Navbar';
import './navbar.css'
const Signed = () => {
 return(
     <ul className="right">
    <li>

    {/* <NavLink to="/Donations">WishList </NavLink>  */}
  </li>
  <li>

     <NavLink to="/wishlist">WishList </NavLink> 
</li>
  <li>
    <NavLink to="/Giftee">Gifts   </NavLink>
  </li>
  <li>
    <NavLink to="/donationcreate">Donate Gifts   </NavLink>
  </li>
  <li>
    <NavLink to="/requestcreate">Request Gifts   </NavLink>
  </li>
  <li>
    <NavLink to="/" className='userlogo'> SPJ</NavLink>
  </li>
  </ul>
 )
}

export default Signed

              
             