import React from 'react'
import {NavLink} from 'react-router-dom'

const Visitor = () => {
 return(
     <ul className="right">
    <li>
    <NavLink to="/signin"> Login </NavLink>
  </li>
  <li>
    <NavLink to="/signup">SignUp </NavLink>
  </li>
  </ul>
 )
}

export default Visitor