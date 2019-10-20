import React from 'react'

const Itemdetails = (props) => {
    const id = props.match.params.id;   
    return (
        <div className="container section project-details">
            
            
                <div className="card-content">
                     <span className = "card-title">Project Title- {id}</span>
                     <div  className="image"><img src="images/kids.png" alt text= 'Spark'></img>
                    <p> Lorem Ipsum dolor sit amet consetecuteur audisocing elit.Asperaten</p>
                </div>
                <div className="card-action">
                    <div>Donated by : Raju</div> 
                    <div> Donated on:04 Oct </div>
                </div>
               </div>
            </div>
           
    )
}   
export default Itemdetails;
