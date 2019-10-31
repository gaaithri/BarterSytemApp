import React from 'react'
const WishListdetails = ({product}) => {
    return(
  
     
        <div className="card productdetails" style={{textAlign:"center",marginLeft:"350px",width:"30rem"}}>
         
                    <div className="card-content " style={{backgroundColor:"navyblue"}}>
                      <span className="card-title"> <b>{product.name}</b></span>
                      <p><b>Request by: </b>{product.rname}</p>
                    
                       {/* <p> Donated By Rani </p> */}
                      {/* <p className="text"> 3 October </p>    */}
                   </div>                      
                </div>
              
          
    )
}

export default WishListdetails ;