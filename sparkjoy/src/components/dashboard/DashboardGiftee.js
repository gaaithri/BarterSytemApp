import React ,{Component} from 'react'
import Notifications from './Notification'
import Itemlist from '../page/Itemlist'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'


class DashboardGiftee extends Component {
    render(){
       // console.log(this.props)
       const {items}= this.props;
        return(
           < div className = "dashboard container" >
               <div className ="row">
                   <div className= "col s12 m6"> 
                   <Itemlist items={items} />
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
        items:state.firestore.ordered.items
    }
}
export default compose(
connect(mapStateToProps),firestoreConnect([
   {collection: 'items'} 
])
)(DashboardGiftee)