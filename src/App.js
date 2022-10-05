import React,{useEffect, useState} from 'react';
import PlaceOrder from './components/PlaceOrder'
import Orders from './components/Orders'
import CompleteOrders from './components/CompleteOrders'

function App() {

  const [orders, setOrders] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8000/orders')
    .then(response => response.json())
    // .then(data=>console.log(data))
    .then(data=>setOrders(data))
  },[])

  return (
    <div className="container mx-auto bg-teal-500 px-10 py-4 mt-20">
       <h1 className='text-center text-white text-xl font-serif py-3'> JAY 5-Star Hotel Orders</h1>
       <div  className="grid grid-cols-3 divide-x bg-zinc-500 md:bg-red-500 lg:bg-emarald-500 px-4">
        <div>
          <h2 className="text-center text-white underline">Place order</h2>
          <PlaceOrder/>
        </div>
        <div>      
          <Orders orders ={orders}/>
        </div>
        <div>
          <h2 className="text-center text-white underline">Complete Orders</h2>
          <CompleteOrders/>
        </div>   
    </div>
    </div>
   
  );
}

export default App;
