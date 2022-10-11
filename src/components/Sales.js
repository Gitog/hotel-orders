import React,{useState} from "react";
import CategorySale from "./CategorySale"

function Sales({orders}){
    // console.log(orders)

    const [filteredData, setFilteredData] = useState(0)
    let summation = 0
    

    function handleChange(e){
       e.preventDefault()
       if(e.target.name==='breakfast'){
        console.log("breakfast Checked")
        const breakfast = orders.filter((order)=>{
            return order.time === 'breakfast'
        })
        breakfast.map((brkfst)=>{
            setFilteredData(brkfst.price)
        })
        // console.log(breakfast)
       }
       
       else if(e.target.name==='lunch'){
        console.log("lunch Checked")
        const lunch = orders.filter((order)=>{
            return order.time === 'lunch'
        })
        console.log(lunch)
        lunch.map((lnch)=>{
            setFilteredData(lnch.price)
        })
       }

       else if(e.target.name==='dinner'){
        console.log("dinner Checked")
         orders.filter((order)=>{
            return order.time === 'dinner'
        }).map((dnnr)=>{
            
            filteredData +=dnnr.price
             setFilteredData(filteredData)
        })
       }

    }
    
    return(
        <>
        
        <h1 className="text-center text-white underline">Today Sales</h1>
        
         <div className="mt-10 mx-10 space-y-6">        
            <div className="flex space-x-4 item-center py-6">

        <label>
            <input type='checkbox' name='breakfast' value="breakfast" onChange={handleChange}/> Breakfast
        </label>

        <label>
            <input type='checkbox' name='lunch' value='lunch' onChange={handleChange}/> Lunch
        </label>

        <label>
            <input type='checkbox' name='dinner' value='dinner'  onChange={handleChange}/> Dinner
        </label>
        
        </div>
        
        {/* <div> */}
        {/* <button className='text-white bg-blue-500 px-3 mb-5 hover:bg-violet-600'>REQUEST</button> */}
        {/* </div> */}
        </div>
       

        <ul className="pb-5">
           <CategorySale price={filteredData}/>
        </ul>
        </>
    )
}

export default Sales;