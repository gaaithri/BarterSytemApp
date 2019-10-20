import React from 'react'

const Donationdetails = ({item}) => {
    return(
        <div className="card itemdetails">
                <div  className="image"><img src= {item.image}></img>
                    <div className="card-content ">
                      <span className="card-title"> {item.name}</span>
                      <p>Donated by:{item.dname}</p>
                       {/* <p> Donated By Rani </p> */}
                      {/* <p className="text"> 3 October </p>    */}
                   </div>                      
                </div>
            </div>
    )
}

export default Donationdetails ;