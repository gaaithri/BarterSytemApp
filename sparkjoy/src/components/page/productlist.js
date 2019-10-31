import React from 'react'
import WishListdetails from './WishListdetails'
import {Link} from 'react-router-dom'
const Productlist = ({products}) => {
    
    return(
      
        <div className="productList">
            {products && products.map(product =>{
                return(
                  
                    <Link to ={'/wishlist/'+ product.id} >
                          <WishListdetails product={product} key={product.id}  />
                                
                                </Link>
                )
            }) }
            

           

         </div>
        )
    }

  export default Productlist;
            



       
    