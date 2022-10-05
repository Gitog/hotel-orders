import React from 'react'
import Order from './Order'

function Orders({orders}){

    return (
        <>
         <h2 className="text-center text-white underline">Client Order</h2>
         <div  className='py-5 px-4 shadow sm:px-10'>
         <table className="border-collapse border border-slate-400">    
           <tbody>
               <tr>
                <th className='border border-slate-300'>Food</th>
                <th className='border border-slate-300'>Time</th>
                <th className='border border-slate-300'>Price</th>
              <th className='border border-slate-300'>Pay</th>
           </tr>
           {
         orders.map((order)=>(
           <Order 
           key={order.id}
           food={order.food}
           time={order.time}
           price={order.price}
            />
         ))
      }
      </tbody> 
   </table>
</div>
     </>
    )
}

export default Orders;