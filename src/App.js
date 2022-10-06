import React,{useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import PlaceOrder from './components/PlaceOrder'
import Orders from './components/Orders'
import Sales from './components/Sales'

function App() {

  
  const [page,setPage]=useState('/')
  const [orders, setOrders] = useState([])


  useEffect(()=>{
    fetch('http://localhost:8000/orders')
    .then(response => response.json())
    // .then(data=>console.log(data))
    .then(data=>setOrders(data))
  },[])

  return (
    <div className="h-screen bg-food-image">
      <NavBar onChangePage={setPage}/>

      <div className=' container mx-auto bg-cyan-300 mt-10 min-h-[50%]'>

       <h1 className='font-bold text-center text-white text-xl font-serif py-3'> Horizon 5-Star Hotel Orders</h1>
       <div  className="max-w-md mx-auto rounded-xl drop-shadow-2xl bg-zinc-500 md:bg-red-500 lg:bg-emarald-500 px-4">
          <Routes>

            <Route path='/' element={<PlaceOrder/>}/>

            <Route path='/orders' element={<Orders orders ={orders}/>}/>

            <Route path='/sales' element={ <Sales orders={orders}/>}/>

          </Routes>
    </div>
    </div>
    <p className='text-center text-white py-3 italic'> Working Together with You | copyright@2022</p>
    </div>
   
  );
}

export default App;
