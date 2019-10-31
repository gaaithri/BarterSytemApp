import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Link} from 'react-router-dom'
import {Card,Button } from 'react-bootstrap'
const Itemdetails = (props) => {
   const{item}  = props;
   if(item){
       return(
          
        <Card bg="light">
            
        <Card.Body >
    <div className="container section project-details">
    <div className="card-content">
    <div  className="image">
        <div style={{textAlign:"center"}}>
         <span className = "card-title" style={{textAlign:"center"}}>
         <p> <h3 > Details of your chosen gift</h3> </p>
         {item.name}</span>
          <p><span >{item.msg}</span>  </p>
    </div>
    </div>
    <div className="card-action" style={{textAlign:"center"}}>
        <div><b>Donated by :</b>{item.dname} </div> 
        <div><b> Donated on:21 Oct</b>  </div>
        <div> <Link to = {"/thankGiftee"} >  <Button variant="success">Get the Spark</Button></Link>
         </div>
         <div style={{marginBottom:"275px",padding:"5px"}}></div>
    </div>
   </div>
</div>
</Card.Body>
</Card>

       )
   }

else {
    return (
        <div className="container center">
            <p>Waiting for Data....</p>
       </div>
       )
   }
  }   

const mapStateToProps = (state,ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const items = state.firestore.data.items;
    const item = items ? items[id]:null
    return{
      item: item
    }
}

export default compose(
connect(mapStateToProps),
firestoreConnect([
    {collection:'items'}
])
)(Itemdetails);


