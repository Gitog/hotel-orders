import React from 'react'

function PlaceOrder(){

    return(
        <div className='py-5 px-4 shadow sm:px-10'>
        <form className='mb-0 space-y-6' method='' >
            <div>
               <label for='food' className='block text-sm font-medium text-white'>
                Food:     
             </label>
            <div className='mt-1'>
              <input type='text' name='name' required/>
            </div>
            </div>

            <div>
              
            <div className='mt-1 flex'>
            <label for='food' className='block text-sm font-medium text-white px-3'>
            <input type='radio' name='name' value='breakfast' required checked/>
                Breakfast   
             </label>

             <label for='food' className='block text-sm font-medium text-white px-3'>
            <input type='radio' name='name' value='lunch' required/>
                Lunch    
             </label>

             <label for='food' className='block text-sm font-medium text-white px-3'>
            <input type='radio' name='name' value='supper' required/>
                Dinner     
             </label>
             
            </div>
            
            </div>
           
            <div>
               <label for='price' className='block text-sm font-medium text-white'>
                Price:     
             </label>
            <div className='mt-1'>
              <input type='number' name='price' required/>
            </div>
            </div>

            <button className='text-white bg-blue-500 px-3'>Submit</button>
        </form>
        </div>
    )
}

export default PlaceOrder;