import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Link} from 'react-router-dom'

const Itemdetails = (props) => {
   const{item}  = props;
   if(item){
       return(
    <div className="container section project-details">
    <div className="card-content">
    <div  className="image">
         <span className = "card-title">
         <p> <h5>See details below of the chosen product</h5> </p>
         {item.name}</span>
          <p><span >{item.msg}</span>  </p>
    </div>
  
    <div className="card-action">
        <div>Donated by :{item.dname} </div> 
        <div> Donated on:23 Sept </div>
        <div> <Link to = {"/thankGiftee"} ><button> Get the Spark </button></Link>
         </div>
    </div>
   </div>
</div>
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


