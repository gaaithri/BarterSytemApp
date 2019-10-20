import React from 'react'

const Donationdetails = ({item}) => {
    return(
        <div className="card itemdetails">
                <div  className="image"><img src= {item.image}  width="250px" height="200px"></img>
                    <div className="card-content ">
                      <span className="card-title"> {item.name}</span>
                       <p> Donated By {item.dname} </p>
                      <p className="text"> 3 September </p>   
                      <br />
                   </div>                      
                </div>
            </div>
    )
}

export default Donationdetails ;