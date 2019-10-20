import React from 'react'

const WishListdetails = ({product}) => {
    return(
        <div className="card productdetails">
             
                    <div className="card-content ">
                      <span className="card-title"> {product.name}</span>
                      <p>Donated by:{product.rname}</p>
                       {/* <p> Donated By Rani </p> */}
                      {/* <p className="text"> 3 October </p>    */}
                   </div>                      
                </div>
          
    )
}

export default WishListdetails ;