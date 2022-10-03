import React from 'react';
import PlaceOrder from './components/PlaceOrder'
import Orders from './components/Orders'

function App() {
  return (
    <div  class="grid grid-cols-3 divide-x">
    <PlaceOrder/>
    <Orders/>
    </div>
  );
}

export default App;
