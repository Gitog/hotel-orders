import React  from "react";

function Order({food, time, price}){
    return (
        <tr>
        <td className='border border-slate-300'>{food}</td>
        <td className='border border-slate-300'>{time}</td>
        <td className='border border-slate-300'>{price}</td>
      </tr>
    )
}

export default Order;