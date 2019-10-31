import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Link} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import ServingReq from './servingreq';

const Productdetails = (props) => {
   const{product}  = props;
   if(product){
       return(
        <Card bg="light">
        <Card.Body >
    <div className="container section project-details">
    <div className="card-content">
    <div  className="image">
        <div style={{textAlign:"center"}}>
         <span className = "card-title" >
         <p> <h3 >Details of Item you wish to Donate</h3> </p>
                {product.name}</span>
          <p><span >{product.msg}</span>  </p>
    </div>
  
    <div className="card-action" style={{textAlign:"center"}}>
        <div><b>Request by :</b> {product.rname}</div> 
        <div> <b>Requested on: </b>21 Oct</div>
        <div> <Link to = {"/servingreq"} ><button style={{color:"blue"}}> Give the Spark </button></Link>
        <div style={{marginBottom:"250px"}}></div>
        </div>  
        </div>
    </div>
   </div>
</div>
</Card.Body>
</Card>
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