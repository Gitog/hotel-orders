import React  from "react";

function Order({food, time, price}){
    return (
        <tr>
        <td class='border border-slate-300'>{food}</td>
        <td class='border border-slate-300'>{time}</td>
        <td class='border border-slate-300'>{price}</td>
      </tr>
    )
}

export default Order;