import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Link} from 'react-router-dom'
const Productdetails = (props) => {
   const{product}  = props;
   if(product){
       return(
    <div className="container section project-details">
    <div className="card-content">
    <div  className="image">
        
         <span className = "card-title">
         <p> <h5>See details below of the chosen product</h5> </p>
                {product.name}</span>
          <p><span >{product.msg}</span>  </p>
    </div>
  
    <div className="card-action">
        <div>Donated by :{product.rname} </div> 
        <div> Donated on:23 Sept </div>
        <div> <Link to = {"/thankGiftee"} ><button> Give the Spark </button></Link>
            
        </div>
    </div>
   </div>
</div>
       ) }
       else{
        return (
        <div className="container center">
            <p>Waiting for Data....</p>
       </div>
       )
   }
  }
  const mapStateToProps = (state,ownProps)=>{
    console.log(state);
    const id = ownProps.match.params.id;
    const products = state.firestore.data.products;
    const product = products ? products[id]:null
    return{
      product: product
    }}
export default compose (connect(mapStateToProps),firestoreConnect([{collection:'products'}]))(Productdetails);