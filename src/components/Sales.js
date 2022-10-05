import React from "react";

function Sales({orders}){
    return(
        <>
        
        <h1 className="text-center text-white underline">Today Sales</h1>
        <div className="flex mx-auto py-4">
        <label>
            <input type='checkbox' name='breakfast'/> Breakfast
        </label>

        <label>
            <input type='checkbox' name='lunch'/> Lunch
        </label>

        <label>
            <input type='checkbox' name='dinner'/> Dinner
        </label>
        
        </div>
        <div>
        <button className='text-white bg-blue-500 px-3 mb-5'>REQUEST</button>
        </div>
        </>
    )
}

export default Sales;