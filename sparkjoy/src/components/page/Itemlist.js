import React from 'react'
import Donationdetails from './Donationdetails'
const Itemlist = ({items}) => {
    return(
        <div className="itemList">
            {items && items.map(item =>{
                return(
                    <Donationdetails item={item} key={item.id} />
                )
            }) }
            

           

         </div>
        )
    }

  export default Itemlist;
            



       
    