import React from 'react'
import Donationdetails from './Donationdetails'
import {Link} from 'react-router-dom'
const Itemlist = ({items}) => {
    return(
        <div className="itemList">
            {items && items.map(item =>{
                return(
                    <Link to={'/donation/'+item.id}>
                    <Donationdetails item={item} key={item.id} />
                    </Link>
                )
            }) }
            

           

         </div>
        )
    }

  export default Itemlist;
            



       
    