import React from 'react'
import {Card} from 'react-bootstrap'
const Donationdetails = ({item}) => {
    return(
       
     
        <div className="card itemdetails"  style={{width:"600px",marginLeft:"300px"}}>
           
            <div class="row">
                <div class="col-md-6">
                <div  className="image"><img src= {item.image}  width="250px" height="200px"></img>  </div> 
                </div>
                <div class="col-md-6">
                      <span><b>{item.name}</b> </span>
                      <div>    <p> <b>Donated By:</b>{item.dname} </p></div>
                   
                      <p className="text"><b>Date: </b> 21 Oct</p> 
                      </div>  
                      <br />
                     </div>                 
                </div>
                
             
    )
}

export default Donationdetails ;