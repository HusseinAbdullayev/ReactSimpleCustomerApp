import { useState } from 'react';
import './App.css'
import CostumerForm from './components/CostumerForm/CostumerForm'
import CostumerList from './components/CostumerList/CostumerList'

function App() {

  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    // setCustomers([...customers, newCustomer]);
    setCustomers((prevState) =>[newCustomer,...prevState]);

  };
  

  return (
    <div className='App'>
      <h1>Customer Manage System</h1>
    <CostumerForm addNewCustomer={addNewCustomer}/>
    <br />
    {customers.length === 0 && "There are no customers..." }
    <CostumerList  customers ={customers} setCustomers={setCustomers}/>

    </div>
  )
}

export default App
