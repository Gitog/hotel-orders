import React,{useState} from "react";
import CategorySale from "./CategorySale"

function Sales({orders}){

    const {breakfast,setBreakfast}=useState(true)

    function showSales(e){
        e.preventDefault()
        console.log("Clicked")
        handleBreakFast()
    }

    function handleBreakFast(e){
       if(e ==="breakfast"){
         if(breakfast ===true){
            console.log("The Breakfast")
         }
       }
    }

    return(
        <>
        
        <h1 className="text-center text-white underline">Today Sales</h1>
        <form>
         <div className="mt-10 mx-10 space-y-6">        
            <div className="flex space-x-4 item-center">

        <label>
            <input type='checkbox' name='breakfast' value="breakfast" onChange={()=>handleBreakFast("breakfast")} /> Breakfast
        </label>

        <label>
            <input type='checkbox' name='lunch' value='lunch' className="w-4 h-4"/> Lunch
        </label>

        <label>
            <input type='checkbox' name='dinner' value='dinner'/> Dinner
        </label>
        
        </div>
        
        <div>
        <button className='text-white bg-blue-500 px-3 mb-5 hover:bg-violet-600' onClick={showSales}>REQUEST</button>
        </div>
        </div>
        </form>

        <ul>
            {/* {
                orders.map((order)=>{
                    <CategorySale key={order.id} price={order.price}/>
                })
            } */}

<CategorySale/>
           
        </ul>
        </>
    )
}

export default Sales;