import React, {useState} from "react";
import CategorySale from "./components/CategorySale"

function Sales({orders}){

    // const {time,setTime}=useState("")

    function showSales(e){
        e.preventDefault()
        console.log("Clicked")
        console.log(e.target.value)
    }

    return(
        <>
        
        <h1 className="text-center text-white underline">Today Sales</h1>

        <div className="flex mx-auto py-4">

        <label className="px-4">
            <input type='checkbox' name='breakfast' value='breakfast'/> Breakfast
        </label>

        <label>
            <input type='checkbox' name=''lunch value='lunch'/> Lunch
        </label>

        <label className="px-4">
            <input type='checkbox' name='dinner' value='dinner'/> Dinner
        </label>
        
        </div>
        
        <div>
        <button className='text-white bg-blue-500 px-3 mb-5' onClick={showSales}>REQUEST</button>
        </div>
        <ul>
            <CategorySale />
        </ul>
        </>
    )
}

export default Sales;