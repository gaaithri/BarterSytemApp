import React ,{Component} from 'react'
import Notifications from './Notification'
import Productlist from '../page/productlist'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'


class DashboardWishList extends Component {
    render(){
       // console.log(this.props)
       const {products}= this.props;
        return(
           < div className = "dashboard container" >
               <div className ="row">
                   <div className= "col s12 m6"> 
                   <Productlist products={products} />
                   </div>
                   <div className="col s12 m5 offset-m1">  
                   <Notifications />
                    </div>
               </div>
           </div>

        )
    }
}
const mapStateToProps=(state) => {
    console.log(state);
    return{
        // items: state.item.items
        products:state.firestore.ordered.products
    }
}
export default compose(
connect(mapStateToProps),firestoreConnect([
   {collection: 'products'} 
])
)(DashboardWishList)