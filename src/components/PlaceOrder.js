import React, {useState} from 'react'

function PlaceOrder(){

    const [food, setFood] = useState("");
    const [time, setTime]=useState("");
    const [price, setPrice]= useState(0);

    function handleSubmit(e){
        e.preventDefault()
        // console.log("Clicked Submit")
        const singleOrder={
            food,
            time,
            price
        }
            fetch('http://localhost:8000/orders',
            {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(singleOrder)
            })
          
      }

    return(
        <div className='py-5 px-4 shadow sm:px-10'>
            <h1 className='text-center text-white'>What's the Order?</h1>
        <form className='mb-0 space-y-6'  onSubmit={handleSubmit}>
           
               <label className='block text-sm font-medium text-white'>
                Food    
             </label>
            <div className='mt-1'>
              <input type='text'placeholder='Chips Chicken' name='food' required  onChange={(e)=>setFood(e.target.value)}/>
            </div>
           

            <div>  
            <div className='mt-1 flex' onClick={(e)=>setTime(e.target.value)}>
            <label className='block text-sm font-medium text-white px-3'>
            <input type='radio' name='name' value='breakfast' required/>
                Breakfast   
             </label>

             <label className='block text-sm font-medium text-white px-3'>
            <input type='radio' name='name' value='lunch' required/>
                Lunch    
             </label>

             <label className='block text-sm font-medium text-white px-3'>
            <input type='radio' name='name' value='supper' required/>
                Dinner     
             </label>
             
            </div>
            
            </div>
           
            
               <label className='block text-sm font-medium text-white'>
                Price:     
             </label>
            <div className='mt-1'>
              <input type='number' name='price' required  onChange={(e)=>setPrice(e.target.value)}/>
            
            </div>

            <button type='submit' className='text-white bg-blue-500 px-3'>Submit</button>
        </form>
        </div>
    )
}

export default PlaceOrder;